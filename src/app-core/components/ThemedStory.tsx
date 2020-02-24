// This component is for Storybook use only.
import React from "react";
import { withMaterialUI } from "../bootstrap";

const Wrapper = (props: any) => <div style={{ padding: "12px" }}>{props.children}</div>;

export const ThemedStory = withMaterialUI(Wrapper);
