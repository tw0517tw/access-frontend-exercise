import Container from "../components/Container";
import ErrorMessage from "../components/ErrorMessage";
import UserList from "../components/UserList";
import axios, { AxiosError } from "axios";
import parseLinkHeader from "parse-link-header";
import { useQuery } from "react-query";
import { useState } from "react";
import type { GitHubAPIErrorBody, GitHubUser } from "../utils/types";
import type { NextPage } from "next";

type QueryData = { data: GitHubUser[]; next?: string };

const Home: NextPage = () => {
  const [since, setSince] = useState("0");
  const {
    isLoading,
    isError,
    data: queryData,
    error,
    isFetching,
  } = useQuery<QueryData, AxiosError<GitHubAPIErrorBody>>(
    ["users", since],
    () =>
      axios
        .get("https://api.github.com/users", {
          params: {
            per_page: "20",
            since,
          },
        })
        .then((res) => {
          const linkHeader = parseLinkHeader(res.headers.link);

          return {
            data: res.data,
            next: linkHeader?.next?.since,
          };
        }),
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );

  const { data, next } = queryData || {};

  const renderNextButton = () => {
    return (
      next && (
        <div>
          <button
            disabled={isFetching}
            onClick={() => {
              setSince(next);
            }}
          >
            ▶ Next Page
          </button>
        </div>
      )
    );
  };

  return (
    <Container>
      <h1>User List</h1>
      {isLoading && <h1>🔄</h1>}
      {isError && error && <ErrorMessage error={error} />}

      {data && (
        <>
          <div>Items on this page: {isFetching ? "🔄" : data.length}</div>
          <div>
            ID on this page:{" "}
            {isFetching ? "🔄" : `${data[0].id} ~ ${data[data.length - 1].id}`}
          </div>
          {renderNextButton()}
          <UserList users={data}></UserList>
          {renderNextButton()}
        </>
      )}
    </Container>
  );
};

export default Home;
