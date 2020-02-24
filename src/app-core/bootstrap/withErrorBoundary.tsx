import React, { ElementType } from "react";
import { ErrorBoundary } from "../components/errorBoundary/ErrorBoundary";

export const withErrorBoundary = (Component: ElementType) => (props: object) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);
