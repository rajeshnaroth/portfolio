import { configure } from "@storybook/react";
const req = require.context("../src/app-core/components", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
