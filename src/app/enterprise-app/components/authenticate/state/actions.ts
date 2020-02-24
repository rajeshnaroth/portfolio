import { IAuthTokenInfo } from "../types";
import { Action, IAction } from "./reducer";

export const setUserAction = (username: string) => ({
  data: username,
  type: Action.SET_USER
});
export const setTokenAction = (token: IAuthTokenInfo | null) => ({
  data: token,
  type: Action.SET_TOKEN
});

export const actions = (dispatch: React.Dispatch<IAction>) => {
  return {
    setUser: (username: string) => dispatch(setUserAction(username)),
    setToken: (token: IAuthTokenInfo | null) => dispatch(setTokenAction(token))
  };
};
