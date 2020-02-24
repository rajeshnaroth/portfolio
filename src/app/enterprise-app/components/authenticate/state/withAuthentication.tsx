import React, { ElementType, useReducer } from "react";
import { getAuthTokenInfoFromLocalStorage, getUserFromLocalStorage, logout } from "../authenticate";
import { actions } from "./actions";
import { initialState, reducer } from "./reducer";

interface IAuthContainerContext {
  actions: any;
  state: any;
}

const AuthenticationContext = React.createContext<IAuthContainerContext>({ state: {}, actions: {} });

export const useAuthenticationContext = () => {
  return React.useContext(AuthenticationContext);
};

export const withAuthentication = (Component: ElementType) => (props: object) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setUser, setToken } = actions(dispatch);
  const context: IAuthContainerContext = {
    state,
    actions: { setUser, setToken }
  };

  React.useEffect(() => {
    const loginInfo = getUserFromLocalStorage();
    if (loginInfo?.username) {
      setUser(loginInfo.username);
    } else {
      logout();
    }
    setToken(getAuthTokenInfoFromLocalStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // mount and unmount effect only

  return (
    <>
      <AuthenticationContext.Provider value={context}>
        <Component {...props} />
      </AuthenticationContext.Provider>
    </>
  );
};
