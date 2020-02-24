import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../authenticate";
import { useAuthenticationContext } from "../state/withAuthentication";

export const LogoutContainer = () => {
  const {
    actions: { setUser }
  } = useAuthenticationContext();
  useEffect(() => {
    logout();
    setUser("");
    window.location.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Redirect to="/app/login" />;
};
