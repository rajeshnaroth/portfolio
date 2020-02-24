// tslint:disable-next-line: no-implicit-dependencies
import React, { ElementType } from "react";
import { AppShell } from "./AppShell";

export const withAppShell = (Component: ElementType) => (props: object) => {
  return (
    <AppShell>
      <Component {...props} />
    </AppShell>
  );
};
