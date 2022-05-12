export type GitHubUser = {
  id: number;
  avatar_url: string;
  login: string;
  site_admin: boolean;
};

export type GitHubUserDetail = GitHubUser & {
  name: string;
  bio: string;
  location: string;
  blog: string;
};

export type GitHubAPIErrorBody = { message: string; documentation_url: string };
