// tslint:disable-next-line: no-implicit-dependencies
import React, { ElementType } from "react";
import { useTranslation } from "react-i18next";

import { LoginShell } from "./components/LoginShell";

export const withLoginShell = (Component: ElementType) => (props: object) => {
  const { t } = useTranslation();

  return (
    <LoginShell title={t("AppName")}>
      <Component {...props} />
    </LoginShell>
  );
};
