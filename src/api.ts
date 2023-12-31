import {
  GetReadmeForRepoT,
  GetRepoListT,
  QueryOrder,
  QuerySort,
  RepoListT,
  RepoT,
  SetDataT,
} from "./types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/repositories",
});

const searchApi = axios.create({
  baseURL: "https://api.github.com/search",
});

export const setData: SetDataT = async (data, setState) => {
  const [searchTerm, page, sort, order] = data;
  const result = await getRepoList(searchTerm, page, sort, order);
  if (result !== null) setState(result);
  else setState(undefined);
};

export const PER_PAGE = 30;

export const getRepoList: GetRepoListT = async (
  searchTerm = "example",
  page = 0,
  sort,
  order = "desc"
) => {
  type DataT = {
    total_count: number;
    incomplete_results: boolean;
    items: RepoListT;
  };

  try {
    const params: {
      q: string;
      page: number;
      per_page: number;
      sort?: QuerySort;
      order?: QueryOrder;
    } = {
      q: searchTerm,
      page,
      per_page: PER_PAGE,
    };

    if (sort) {
      params.sort = sort;
      params.order = order;
    }

    const response: { data: DataT & unknown } = await searchApi.get(
      "/repositories",
      { params }
    );

    const data = response.data;

    const list: RepoListT = data.items?.map((repo) => {
      const returnable: RepoT = {
        id: repo.id,
        name: repo.name,
        forks_count: repo.forks_count,
        stargazers_count: repo.stargazers_count,
        watchers: repo.watchers,
        open_issues: repo.open_issues,
        readme: repo.readme,
        html_url: repo.html_url,
        owner: {
          login: repo.owner.login,
          avatar_url: repo.owner.avatar_url,
          url: repo.owner.url,
        },
      };

      return returnable;
    });

    return list;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getReadmeForRepo: GetReadmeForRepoT = async (repoID) => {
  type DataT = {
    content: string;
  };

  try {
    const response: { data: DataT & unknown } = await api.get(
      `/${repoID}/contents/README.md?ref=master`
    );
    const content = response.data.content;
    const string = window.atob(content);
    return string;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
