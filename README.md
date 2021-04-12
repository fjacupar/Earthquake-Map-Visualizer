# Earthquakes Map Visualizer

In this repository you can find the Earthquakes Map Visualizer test.

# Brief explanation of the app development

I would like to give a brief explanation about what is the process that I've followed and the decisions that I've made to develop the Earthquakes Map Visualizer app.

The app has been built using ReactJS (Create React App tool). As you will see there are six components in te app that extend from React.PureComponent to check props on each component to decide wheter to render the component or not (to avoid unnecessary rendering of components). 


The main component is the Map component which is the one that holds most of the logic of the app and store the states of the app to share it between components, the rest of the components are stateless. The Map component uses DeckGL to render the map, basemap and layer (IconLayer). The data has been fetched from the API given in the test and each GeoJSON feature(earthquake) is an icon in the IconLayer.

In order to change the URL when navigating in each view (general and detailed view) I've made use of React Router library.

I've made use of component libraries (Material UI, react-search-autocomplete, react-sliding-pane and react-loader-spinner) in order to facilitate and speed up component creation.

As a bonus I've included a search component to look up earthquakes by id and change the icon for the earthquakes based on its state.


## Improvements

As possible future improvements to the app I would:


-Add tests with jest library to test the code.

-Improve UX/UI and make the app responsive for mobile phones.

-In case the app would have a hight data manipulation or calculation, I'll do it in a separate thread (Web worker).


## Running the app

### `npm install`

Once you have cloned or downloaded the project you have to run `npm install` in the root of the project folder(where package.json is located) to install all the dependencies that are used in the app. 


### `npm start`

After the dependencies have been installed you can run `npm install` in the root of the project folder in ordert to start a local server to view the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
