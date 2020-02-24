import { Grid } from "@material-ui/core";
import * as React from "react";

export const CenterBox = (props: any) => (
  <div style={{ height: "100vh", display: "flex" }} {...props}>
    <Grid container={true} direction="row" justify="center" alignItems="center">
      {props.children}
    </Grid>
  </div>
);
