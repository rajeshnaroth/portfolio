import { CircularProgress, Grid } from "@material-ui/core";
import React, { Suspense } from "react";

const EnterpriseApp = React.lazy(() => import("./enterprise-app/EnterpriseApp"));
const PublicCatalogApp = React.lazy(() => import("./public-catalog/PublicCatalogApp"));
const NoAppAvailable = () => (
  <div style={{ height: "100vh", display: "flex" }}>
    <Grid container={true} direction="row" justify="center" alignItems="center">
      <h3>No Application specified. Please check your .env file.</h3>
    </Grid>
  </div>
);

export const App: React.FC = () => {
  const currentPlatform: string = process.env.REACT_APP_MODE || ""; // set in .env file

  return (
    <Suspense fallback={<CircularProgress color="secondary" />}>
      {currentPlatform === "CATALOG-APP" ? (
        <PublicCatalogApp />
      ) : currentPlatform === "ENTERPRISE-APP" ? (
        <EnterpriseApp />
      ) : (
        <NoAppAvailable />
      )}
    </Suspense>
  );
};
