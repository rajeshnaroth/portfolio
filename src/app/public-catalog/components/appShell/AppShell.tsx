import { Box } from "@material-ui/core";
import React from "react";

interface IProps {
  children: React.ReactElement;
}

export const AppShell = ({ children }: IProps) => {
  return <Box data-testid="altas-app-container">{children}</Box>;
};
