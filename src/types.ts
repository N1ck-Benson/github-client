export type SetDataT = (
  data: Parameters<GetRepoListT>,
  setState: React.Dispatch<
    React.SetStateAction<Awaited<ReturnType<GetRepoListT>>>
  >
) => void;

export type UseReadmeT = (singleItem: RepoT | undefined) => string | undefined;

export type GetRepoListT = (
  searchTerm: string,
  page: number,
  sort?: QuerySort,
  order?: QueryOrder
) => Promise<RepoListT | undefined>;

export type GetReadmeForRepoT = (repoID: string) => Promise<string | undefined>;

export type QuerySort = "stars" | "forks" | "updated" | "open-issues";
export type QueryOrder = "asc" | "desc";

export type RepoListT = (RepoT & unknown)[];

export type RepoT = {
  id: string;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
  forks_count: number;
  stargazers_count: number;
  watchers: number;
  open_issues: number;
  readme: string;
  html_url: string;
};

export type ErrorT = {
  message: string;
};

type SetStateT<T> = React.Dispatch<React.SetStateAction<T>>;

export type ContextT = {
  singleItem: RepoT | undefined;
  setSingleItem: SetStateT<RepoT | undefined>;
  list: RepoListT | undefined;
  setList: SetStateT<RepoListT | undefined>;
  page: number;
  setPage: SetStateT<number>;
  term: string;
  setTerm: SetStateT<string>;
  showFilter: boolean;
  setShowFilter: SetStateT<boolean>;
};
