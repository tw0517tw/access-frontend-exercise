import Container from "../components/Container";
import ErrorMessage from "../components/ErrorMessage";
import Image from "next/image";
import axios, { AxiosError } from "axios";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import type { GitHubAPIErrorBody, GitHubUserDetail } from "../utils/types";
import type { NextPage } from "next";

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  column-gap: 16px;
  row-gap: 8px;

  max-width: 480px;

  & img {
    border-radius: 24px;
  }

  & div {
    padding: 4px;

    & > a {
      text-decoration: underline;
    }
  }
`;

const UserPage: NextPage = () => {
  const router = useRouter();
  const { login } = router.query;
  const { isLoading, isError, data, error } = useQuery<
    GitHubUserDetail,
    AxiosError<GitHubAPIErrorBody>
  >(
    ["user", login],
    () =>
      axios.get(`https://api.github.com/users/${login}`).then((res) => {
        return res.data;
      }),
    { refetchOnWindowFocus: false }
  );

  return (
    <Container>
      <h1>User Profile Detail</h1>
      {isLoading && <h1>🔄</h1>}
      {isError && error && <ErrorMessage error={error} />}
      {data && (
        <ProfileGrid>
          <div>Login</div>
          <div>{data.login}</div>
          <div>Avatar</div>
          <div>
            <Image
              src={data.avatar_url}
              alt={data.login}
              height="100px"
              width="100px"
            />
          </div>
          <div>Name</div>
          <div>{data.name}</div>
          <div>Bio</div>
          <div>{data.bio}</div>
          <div>Location</div>
          <div>{data.location}</div>
          <div>Blog</div>
          <div>
            <a href={data.blog} target="_blank" rel="noopener noreferrer">
              {data.blog}
            </a>
          </div>
          <div>Site Admin</div>
          <div>{data.site_admin ? "True" : "False"}</div>
        </ProfileGrid>
      )}
    </Container>
  );
};

export default UserPage;
