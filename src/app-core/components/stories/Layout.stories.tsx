import { storiesOf } from "@storybook/react";
import * as React from "react";
import { CenterBox, ThemedStory } from "..";

const Wrapper: React.FC = props => <ThemedStory>{props.children}</ThemedStory>;

const story = storiesOf("Layout|Flex", module);

const FillHeight = () => (
  <Wrapper>
    <CenterBox>
      <h3>Full Page height and center aligned. Yay!</h3>
    </CenterBox>
  </Wrapper>
);

story.add("Full", () => <FillHeight />);
