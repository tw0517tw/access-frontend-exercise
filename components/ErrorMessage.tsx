import { FC } from "react";
import type { AxiosError } from "axios";
import type { GitHubAPIErrorBody } from "../utils/types";

type ErrorMessageProps = {
  error: AxiosError<GitHubAPIErrorBody>;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div>
      <h2>❌{error.message}</h2>
      <div>{error.response?.data.message}</div>
      <div>{error.response?.data.documentation_url}</div>
    </div>
  );
};

export default ErrorMessage;
