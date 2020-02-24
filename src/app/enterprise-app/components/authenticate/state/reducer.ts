export enum Action {
  SET_USER,
  SET_TOKEN,
  DEFAULT
}

export interface IAction {
  type: Action;
  data: any;
}

export interface IAuthenticationContext {
  username: string;
  token: string;
}

export const initialState: IAuthenticationContext = {
  username: "",
  token: ""
};

export function reducer(state: IAuthenticationContext, action: IAction) {
  switch (action.type) {
    case Action.SET_USER:
      return { ...state, username: action.data };
    case Action.SET_TOKEN:
      return { ...state, token: action.data };
    case Action.DEFAULT:
      return { ...state };
    default:
      throw new Error("Unknown Action in reducer");
  }
}
