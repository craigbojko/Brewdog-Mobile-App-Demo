# Yoello - Brewdog Mobile Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes on app

- Probably around 5-6 hours work so far, not finished the whole task (will probably continue to completion because it actually a cool demo app)
- App is bootstrapped from create-react-app, slightly customised for linting and testing preferences
- Currently the main App.spec test fails, API test passes
- Hosted on Github pages, will move to AWS S3 bucket for long term serverless hosting under my domain
- Uses Google's Material-UI for styling and Iconography
- App pulls drinks from Brewdogs API, displays in Material Grid, User can then navigate and select a drink to view more information in the modal. User can then add the drink to their shopping cart and view the cart contents.
- Further work needed to finish the development of the cart and it's animation/gesture control - currently clicking the cart header area will toggle it's open/close state

## Done

[x] Primary and secondary navigation for tab selection

[x] Gesture control for changing tabs (swipe left/right)

[x] Pulls API content into redux on load using react hooks

[x] API interaction happens within RxJS Epics, further development with this library will allow for more advanced side effects within the app

[x] User can select drinks and view in the modal

[x] User can add drinks to their shopping cart

[x] Shopping cart state is handled by redux

## ToDo/Further work

[ ] Add additional pages when swiping up, loads next paginated page

[ ] Bring react-spring and react-gesture into the app for nicer animations and gesture control

[ ] Work on the sub-nav bar to offset items as in video

[ ] Fix initial no-animation on swiping left/right on the page

[ ] Finish shopping basket with gesture control and layout/design

[ ] Allow users to remove items from basket

[ ] Add sorting/filtering options to pages

[ ] More testing with Jest

[ ] Bring Cypress testing suite in for better integration testing

[ ] More polishing of design elements for better UX

[ ] Add things to other tabs

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
