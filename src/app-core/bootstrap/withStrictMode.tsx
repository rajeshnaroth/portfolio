import React, { ElementType, StrictMode } from "react";

export const withStrictMode = (Component: ElementType) => (props: object) => (
  <StrictMode>
    <Component {...props} />
  </StrictMode>
);
