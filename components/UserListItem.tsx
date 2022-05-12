import Image from "next/image";
import styled from "styled-components";
import { FC } from "react";

const Item = styled.div`
  display: flex;
  padding: 16px;
  margin: 16px;
  border-width: 2px;
  border-style: solid;
  border-color: #eeeeee;
  border-radius: 8px;
  min-width: 320px;
  justify-content: space-between;

  &:hover {
    border-color: #888888;
  }

  & img {
    border-radius: 24px;
  }
`;

const Left = styled.div`
  margin: 0 8px;
`;

const Right = styled.div`
  margin: 0 8px;
`;

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
    <Item>
      <Left>
        <div>ID: {user.id}</div>
        <div>name: {user.login}</div>
        <div>{user.site_admin ? "🌟" : "⭐"}</div>
      </Left>
      <Right>
        <Image
          src={user.avatar_url}
          alt={user.login}
          height="100px"
          width="100px"
        />
      </Right>
    </Item>
  );
};

export default UserListItem;
