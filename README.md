# Recruiting Frontend Engineer: SIM Tracker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). And is using typescript and material UI 

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Choice of library, framework and programming languages

This project is using the following:
- React: React is a very popular and powerful library for building user interfaces
- Material UI: is a very popular UI component framework for React
- Typescript:  is a strict syntactical superset of JavaScript and adds optional static typing to the language

The combanation of these tools provides a very good coding environment, material UI is closer to the provided Screen which made it an easier choice. Typescript being a superset of Javascript also leaves it the only choice for writting a typed code in Javascript which is always the best choice for big projects.

## Deploy

This project can be deployed to github pages but it can also be deployed to another hosting provided such as Netlify, Heroku, Digital Ocean, ...

To deploy run
```
npm run deploy
```

Note: You should update homepage in package.json if using githubpages see [How to Deploy a Routed React App to GitHub Pages](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/)

## Improvements

- Test: the test can be improved to cover more test scenarios
- UI: UI can be adjusted to match the screen provided in the challenge document
- User experience: The user experience also needs to be improved, for example, when creating the batches, the data get refreshed which is not a good user experience, instead the data can be fetched in background and be added the user interface without interrupting the user
- Data management: The data management can be improved by use of context API or Redux, this way data will be shared across all the components very easily. Using [swr](https://swr.vercel.app/) could also help to avoid sending uncessary data request to the backend.
