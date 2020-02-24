import { CircularProgress } from "@material-ui/core";
import { compose } from "ramda";
import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import { withErrorBoundary, withMaterialUI, withRouter, withStrictMode } from "app-core";
import { withAppShell, withI18n } from "./bootstrap";

export const page = compose(withI18n, withStrictMode, withRouter, withMaterialUI, withAppShell, withErrorBoundary);

const DashboardFeature: React.FC = () => <div>CATALOG APP</div>;

const AppContent = () => (
  <Suspense fallback={<CircularProgress color="secondary" />}>
    <Route path="/app" exact={true} component={DashboardFeature} />
    <Route path="/app/dashboard" exact={true} component={DashboardFeature} />
  </Suspense>
);

export const PublicCatalogApp = () => {
  const App = page(() => <AppContent />);
  return <App />;
};

export default PublicCatalogApp;
