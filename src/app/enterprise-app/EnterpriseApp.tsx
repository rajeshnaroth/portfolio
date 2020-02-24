import { compose } from "ramda";
import React from "react";
import { Route } from "react-router-dom";

import {
  withAppShell,
  withI18n,
  withLoginShell
  // tslint:disable-next-line: no-implicit-dependencies
} from "./bootstrap";

import {
  withErrorBoundary,
  withMaterialUI,
  withRouter,
  withStrictMode
  // tslint:disable-next-line: no-implicit-dependencies
} from "app-core";

import {
  getUserFromLocalStorage,
  LoginFormContainer,
  LogoutContainer,
  withAuthentication
} from "./components/authenticate";

import { AppRoutesAndLoaders } from "./AppRoutesAndLoaders";

export const authenticatedPage = compose(
  withI18n,
  withStrictMode,
  withRouter,
  withAuthentication,
  withMaterialUI,
  withAppShell,
  // @ts-ignore (with TypeScript typing, ramda compose only allows upto 6 functions)
  withErrorBoundary
);

export const unAuthenticatedPage = compose(
  withI18n,
  withStrictMode,
  withRouter,
  withAuthentication,
  withMaterialUI,
  // @ts-ignore (with TypeScript typing, ramda compose only allows upto 6 functions)
  withLoginShell
);

const userIsAuthenticated = (user: string | null) => user !== null && user !== "";

const AppContent = () => (
  <>
    <Route path="/app/logout" component={LogoutContainer} />
    <AppRoutesAndLoaders />
  </>
);

export const EnterpriseApp = () => {
  const loginInfo = getUserFromLocalStorage();
  const AppMode = userIsAuthenticated(loginInfo.username)
    ? authenticatedPage(() => <AppContent />)
    : unAuthenticatedPage(() => <LoginFormContainer />);
  return <AppMode />;
};

export default EnterpriseApp;
