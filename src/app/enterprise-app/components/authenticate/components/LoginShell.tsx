import React from "react";
import BG from "./images/abstract.jpg";

interface IProps {
  children: React.ReactElement;
  title: string;
}

export const LoginShell = ({ children, title }: IProps) => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${BG})` }}>{children}</div>
    </div>
  );
};
