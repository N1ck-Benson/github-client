# Github Client

This is a single-page React application for searching and viewing metadata about Github repositories.

1. [Setup](#setup)
2. [Development Notes](#development-notes)

To clone and run the repo, you can use the standard scripts provided with create-react-app:

## Setup

In the project directory, you can run:

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

# Development Notes

Implementation planning:

- The API will let us get everything we need without authentication. The readme requires two GET requests instead of one, but doesn't require authentication if the repo is public. Initially thought this was the case, then changed tack. Had to go back and fix it to the current solution.
- The API response header provides links for moving through pagination. In the time given it seems more straightforward to just specify a page based on the UI state.

Nice-to-haves:

- User-friendly error handling (e.g. when no readme is found)
- Try another branch when "master" doesn't return a readme
- Cache results pages already viewed locally (the API may do this already server-side)
- DRY up the side views with sass mixins
- Add fonts and colours, include basic dark mode with toggle

## Checklist (first- to last-priority)

#### Setup

[x] Bootstrap project with create-react-app, ts and sass
[x] Get a blank page, remove unnecessary files
[x] Sketch out a simple mobile-responsive design
[x] Explore API endpoints
[x] Comment requirements from API in an api.ts file
[x] Set out top-level components as callsites for API functions

#### Data

[x] Write all API functions, make type-safe and log out results
[x] Build context provider for components

#### Basic views

[x] Build layout as per sketch, mobile-responsive
[x] Build search component, integrated with API functions
[x] ... list component, plus any item components, integrated
[x] ... SingleItem view, integrated
[x] ... Filter/sort component
[x] ... nav and footer

#### Styling

[x] Swap out elements for MaterialUI if time and where it makes sense

#### Wrap up

[x] Review these notes
[x] Add other materials/resources used in development (insomnia collection, design sketch)
[x] Edit the instructions below
