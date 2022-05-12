import UserListItem, { GitHubUser } from "./UserListItem";
import styled from "styled-components";
import { FC } from "react";

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

type UserListProps = {
  users: GitHubUser[];
};

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <List>
      {users.map((user) => (
        <UserListItem key={user.id} user={user}></UserListItem>
      ))}
    </List>
  );
};

export default UserList;
