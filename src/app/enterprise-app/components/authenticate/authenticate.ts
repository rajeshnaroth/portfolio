import axios from "axios";

import { IAuthTokenInfo, ILoginInfo } from "./types";

export const getUserFromLocalStorage: () => ILoginInfo = () => {
  const username: string = localStorage.getItem("username") || "";
  return { username };
};

type setUserFunction = (username: string) => void;
export const setUserInLocalStorage: setUserFunction = username => {
  localStorage.setItem("username", username);
};

export const getAuthTokenInfoFromLocalStorage = () => {
  try {
    const token: IAuthTokenInfo = JSON.parse(localStorage.getItem("authToken") || "");
    return token;
  } catch (e) {
    return null;
  }
};

type setAuthTokenFunction = (token: any) => void;
export const setAuthTokenInLocalStorage: setAuthTokenFunction = token => {
  localStorage.setItem("authToken", JSON.stringify(token));
};

export const authenticate = (user: string, password: string) => {
  if (user === "" || password === "") {
    throw new Error("No User Id and password provided");
  }
  const loginPostPayload = {
    auth: {
      username: user,
      password
    }
  };
  return axios({
    baseURL: "/rest/api/v1/",
    data: loginPostPayload,
    headers: { "content-type": "application/json" },
    method: "post",
    url: "auth"
  });
};

export const logout = (): void => {
  delete localStorage.username;
  delete localStorage.token;
  delete localStorage.authToken;
};
