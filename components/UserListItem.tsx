import Image from "next/image";
import styled from "styled-components";
import type { FC } from "react";
import type { GitHubUser } from "../utils/types";

const Item = styled.a`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 8px;
  font-size: 24px;

  & > div {
    margin-bottom: 8px;
  }
`;

const Right = styled.div`
  margin: 0 8px;
`;

type UserListItemProps = {
  user: GitHubUser;
};

const UserListItem: FC<UserListItemProps> = ({ user }) => {
  return (
    <Item href={`/${user.login}`}>
      <Left>
        <div>{user.login}</div>
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
