# Github Client

This is a single-page React application for searching and viewing metadata about Github repositories.

1. [Setup](#setup)
2. [Tech Test Notes](#test-test-notes)
3. [Development Notes](#development-notes)

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

# Test Test Notes

### Process and timings:

- I began the task by making a checklist [see below](#checklist), which I followed more or less in order.
- Functionality was prioritised over styling, which was left until last.
- As can be seen from the commit logs, most of the functionality was completed inside 5 hours, with minor corrections made later.
- After that initial time, I reviewed the brief to see where my work could be more aligned with Naimuri's preferences, and decided to implement MaterialUI.

### If I had more time:

- I would complete the styling of the list view, with a MaterialUI pagination component
- ... implement user-friendly error handling (e.g. when no readme is found)
- ... in the request for the readme, send a request for the "main" branch if the "master" is not found
- ... check the Github API's response headers for caching. If not caching, cache results pages that have already been viewed locally
- ... add loading states for the list view and readme view (would opt for a spinner over a skeleton)
- ... DRY up the styling of the side views with sass mixins
- ... add fonts and colours, include basic dark mode with toggle
- ... make use of semantic HTML where appropriate and useful for a11y, e.g. in the SingleView component
- ... workshop some other features for our users!
- ... implement testing with RTL
---

# Development Notes

API Notes:

- The API will let us get everything we need without authentication. The readme requires two GET requests instead of one, but doesn't require authentication if the repo is public. Initially thought this was the case, then changed tack. Had to go back and fix it to the current solution.
- The API response header provides links for moving through pagination. In the time given it seems more straightforward to just specify a page based on the UI state.

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
