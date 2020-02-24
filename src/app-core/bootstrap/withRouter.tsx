import React, { ElementType } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export const withRouter = (Component: ElementType) => (props: object) => (
  <Router basename={"/ui"}>
    <Component {...props} />
  </Router>
);
