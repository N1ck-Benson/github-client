import { GetRepoListT, RepoListT, RepoT } from "./types";
import axios from "axios";

const api = axios.create({ baseURL: "https://api.github.com" });
const searchApi = axios.create({
  baseURL: "https://api.github.com/search",
});

// getRepoList
export const getRepoList: GetRepoListT = async (
  searchTerm = "example",
  page = 0
) => {
  try {
    const response: {
      total_count: number;
      incomplete_results: boolean;
      items: RepoListT;
    } = await searchApi.get("/repositories", {
      params: {
        q: searchTerm,
        page,
      },
    });

    const list: RepoListT = response.items?.map((repo) => {
      const returnable: RepoT = {
        id: repo.id,
        name: repo.name,
        forks_count: repo.forks_count,
        stargazers_count: repo.stargazers_count,
        watchers: repo.watchers,
        open_issues: repo.open_issues,
        readme: repo.readme,
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
    return null;
  }
};

// getRepoByID

// getFileInRepo
