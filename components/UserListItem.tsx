import Image from "next/image";
import { FC } from "react";

export type GitHubUser = {
  id: number;
  avatar_url: string;
  login: string;
  site_admin: boolean;
};

type UserListItemProps = {
  user: GitHubUser;
};

const UserListItem: FC<UserListItemProps> = ({ user }) => {
  return (
    <div>
      <div>{user.id}</div>
      <div>{user.login}</div>
      <Image
        src={user.avatar_url}
        alt={user.login}
        height="100px"
        width="100px"
      ></Image>
    </div>
  );
};

export default UserListItem;
