import styled from "styled-components";
import { FC } from "react";
import type { AxiosError } from "axios";
import type { GitHubAPIErrorBody } from "../utils/types";

const StyledErrorMessage = styled.div`
  & > div {
    margin: 16px 0;
  }

  & a {
    text-decoration: underline;
  }
`;

type ErrorMessageProps = {
  error: AxiosError<GitHubAPIErrorBody>;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return (
    <StyledErrorMessage>
      <h2>❌{error.message}</h2>
      <div>{error.response?.data.message}</div>
      <div>
        <a
          href={error.response?.data.documentation_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {error.response?.data.documentation_url}
        </a>
      </div>
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
