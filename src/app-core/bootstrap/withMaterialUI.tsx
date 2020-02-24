import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { ElementType } from "react";

const theme = createMuiTheme();

export const withMaterialUI = (Component: ElementType) => (props: object) => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
);
