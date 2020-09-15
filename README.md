# Nuvalance Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`/`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`/`npm start`

Launches the test runner in the interactive watch mode.<br />
There are currently no tests written for this project.

### `yarn build`/`npm start`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Summary

### Aproach
I took the approach of working around the API. The first thing I built was the data query. I originally was going to requery for more details on the details page however I realized the API does not allow for direct queries by id. I therefore changed my strategy by storing all the items in global state and pulling the data from the global state object for displaying the details. The styling is very minimal I went for function over looks.

### Features
I only implemented the bare minimum &mdash; basic routing and pagination. I used `@reach/router` for the routing &mdash; I enjoy its style of declaring routes over `react-router`. I used `react-query` and `axios` for network requests. I used React Hooks to do most of the heavy lifting. For state, I use `recoil`, it works very react-like and seperates state into bite sized chunks allowing easier access and operations. For styling I use `styled-components` &mdash; it is like writing CSS in JS.

### What else would you have liked to complete and how long it would have taken you?
First off, tests. What you see here took about 2 hours to complete. Adding tests would have been another hour of work. It would ensure stability and reliability but when tasked with getting a project done in a short time span I had to opt to finishing it without test cases.
Given more time, I would also style the application above the bare minimum &mdash; add animations and transitions following a style guide. And add more SEO.


### What else would you have done to make the project more robust?
I would improve the querying logic. The way the query works now, is it will requery/repoll data every few seconds but it will only do it for the latest page. Ideally, I requery/refetch every page over time to update the data displayed.