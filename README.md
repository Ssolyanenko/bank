This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## API and .env settings

Create file .env in root directory:

```shell
REACT_APP_NODE_ENV=development
REACT_APP_API_HOSTNAME=amusic2new-api-gateway-dev.andersenlab.dev
REACT_APP_API_USE_SSL=true
REACT_APP_GOOGLE_MAP_KEY=AIzaSyDWC0vKSbB2RYtHeVczxk45So0K4tU7uz4
```

## Start project locally

1. Install [Node.js](https://nodejs.org/en/download). Version 18.15.0
2. Run commands from project folder:

- `npm i`
- `npm run start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner using Jest & Enzyme.

### `npm run coverage`

Get coverage information.

### `npx prettier --check .`

Check all files with Prettier.

### `npx prettier --write .`

Format all files with Prettier.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Sonar scanner

Project dasboard - https://sonarqube8.andersenlab.com/dashboard?id=A-Music2-new-front
Export sonar token in `SONAR_TOKEN` env variable before running commands

```
sonar-scanner \
  -Dsonar.projectKey=A-Music2-new-front \
  -Dsonar.sources=. \
  -Dsonar.host.url=https://sonarqube8.andersenlab.com \
  -Dsonar.login=$SONAR_TOKEN
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
