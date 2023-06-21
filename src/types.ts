export type GetRepoListT = (
  searchTerm: string,
  page: number
) => Promise<RepoListT | null>;

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

export type ContextT =
  | {
      singleItem: RepoT | undefined;
      setSingleItem: React.Dispatch<React.SetStateAction<RepoT | undefined>>;
    }
  | undefined;