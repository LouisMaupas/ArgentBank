This project is part of my openclassrooms training.
[Project 13](https://openclassrooms.com/fr/paths/314/projects/813/assignment), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/).

## Project's goal

Phase 1: User Authentication - Creation of a web application allowing customers to log in and manage their accounts and profile.
Phase 2: Transactions - Specify the API endpoints needed for a possible second mission after the first is completed.

## Features

State manager
Authentication and interactions with an API

### Phase 1

Use Redux to manage the state of the entire application.
What the app should do (see details for each on our GitHub Issues templates):
User can visit homepage
User can login to the system
User can log out of the system
User can only see their own profile information after successfully logging in
The user can modify the profile and keep the data in the database.

### Phase 2

Provide a document describing the following APIs for transactions, following Swagger's guidelines:
Anticipate the functionality for transactions which must be able to allow users:
view all their transactions for the current month;
view transaction details in another view;
add, modify or delete transaction information.

Among the key elements to specify for each endpoint of the API will be:

The HTTP method (e.g. GET, POST, etc.)
The route (e.g.: /store/inventory)
The description of what the endpoint is (e.g. Return of pet inventory)
Possible parameters to account for different scenarios (e.g. itemId (optional) = ID of the specific item to request from the inventory database).
The different responses with the corresponding response codes that make sense for this endpoint (ex: 404: unknown article error response).

## Tools

Create React App
Redux Toolkit
Axios
React Query
Functional Components
React Router V6
Swagger
Yaml
ESLint & Prettier

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

React, check out the [React documentation](https://reactjs.org/).
