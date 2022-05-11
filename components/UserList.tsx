import UserListItem, { GitHubUser } from "./UserListItem";
import { FC } from "react";

type UserListProps = {
  users: GitHubUser[];
};

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserListItem key={user.id} user={user}></UserListItem>
      ))}
    </div>
  );
};

export default UserList;
