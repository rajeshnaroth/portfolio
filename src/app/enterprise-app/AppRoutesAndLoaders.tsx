import React, { FunctionComponent, Suspense } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

// import {
//   AdministrationSection,
//   DashboardSection,
//   InfrastructureSection,
//   InventorySection,
//   NotificationsSection,
//   ReportsSection,
//   SupportSection,
//   TestSection
// } from "./feature-sections";

const LoadingIcon = styled.div`
  position: absolute;
  top: 0;
  margin: auto;
`;
const DashboardFeature: React.FC = () => <div>App Dashboard</div>;

export const AppRoutesAndLoaders: FunctionComponent = () => {
  return (
    <Suspense fallback={<LoadingIcon />}>
      <Route path="/app" exact={true} component={DashboardFeature} />
      <Route path="/app/dashboard" exact={true} component={DashboardFeature} />
    </Suspense>
  );
};
