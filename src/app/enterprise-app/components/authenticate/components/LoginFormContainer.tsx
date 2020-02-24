import React from "react";
import { useHistory } from "react-router-dom";
import { authenticate, setAuthTokenInLocalStorage, setUserInLocalStorage } from "../authenticate";
import { useAuthenticationContext } from "../state/withAuthentication";
import { LoginForm } from "./LoginForm";

export const LoginFormContainer = () => {
  const initError = { errorStatus: false, errorMessage: "" };
  const [error, setError] = React.useState(initError);
  const clearError = () => setError(initError);
  const {
    actions: { setToken, setUser }
  } = useAuthenticationContext();
  const history = useHistory();

  const authorize = async (username: string, password: string) => {
    try {
      const response = await authenticate(username, password);
      const token = response?.data?.auth?.id;
      if (!token) {
        throw new Error(response?.data?.error);
      }
      // start encapsulating the token.
      setUser(username);
      setUserInLocalStorage(username);
      setToken(token);
      setAuthTokenInLocalStorage(token);
      history.push("/app/dashboard");
      window.setTimeout(() => window.location.reload(), 200);
    } catch (e) {
      setError({ errorStatus: true, errorMessage: e });
    }
  };

  return <LoginForm {...{ authorize, clearError }} {...error} />;
};
