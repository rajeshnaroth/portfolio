import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "grommet-icons";
import React from "react";

interface IProps {
  children: React.ReactElement;
}

export const AppShell = ({ children }: IProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">News</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
