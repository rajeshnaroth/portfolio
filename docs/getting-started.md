# Getting started

## Setup your editor

Recommended that you use VSCode. Install the following extensions:

- Prettier
- Sass Lint
- TSLint

## Build

Clone the repo and build:

```
git clone https://github.com/rajeshnaroth/portfolio.git
npm install
```

This will build the main ui app and the rest mock.

```
npm start
```

This runs the mock api and the ui

```
npm watch
```

Run this to run the tests as you develop

## Available Scripts

In the project directory, you can run:


### `npm start restapi`

Runs the mock rest api on port 5000.<br>

### `npm start`

Runs app, and restapi in parallel.<br>

### `npm test`

Launches the test runner ito run once.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm watch`

Launches the test runner in the interactive watch mode.<br>

### `npm run sasslint`

Lint your SASS file

### `npm run jslint`

Lint your javascript.

### `npm run lint`

Runs all linters.

### `npm run build`

Builds the app for production to the `build` folder. <br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>
Runs linting before building.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npx serve build`

Runs the production bundle on port 5000 or an available one.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build-storybook`
Builds a static deployable version of storybook in docs/storybook. This works perfect with a github pages deployment in docs