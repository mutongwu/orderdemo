/**
 * Index - this is where everything
 *  starts - but offloads to app.js
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
/* global __DEV__ */
import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Router } from 'react-native-router-flux';

// Consts and Libs
import { AppSizes, Styles } from '@theme/';
import AppRoutes from '@navigation/';
// import Analytics from '@lib/analytics';

// All redux reducers (rolled into one mega-reducer)
import rootReducer from './commons/reducers';

// Connect RNRF with Redux
const RouterWithRedux = connect()(Router);
const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : AppSizes.navbarHeight;
    style.marginBottom = computedProps.hideTabBar ? 0 : AppSizes.tabbarHeight;
  }
  return style;
};

// Load middleware
let middleware = [
  // Analytics,
  thunk, // Allows action creators to return functions (not just plain objects)
];

if (__DEV__) {
  // Dev-only middleware
  middleware = [
    ...middleware,
    // logger(), // Logs state changes to the dev console
  ];
}

// Init redux store (using the given reducer & middleware)
const store = compose(
  applyMiddleware(...middleware),
)(createStore)(rootReducer);

/* Component ==================================================================== */
// Wrap App in Redux provider (makes Redux available to all sub-components)
export default function AppContainer() {
  return (
    <Provider store={store}>
      <RouterWithRedux scenes={AppRoutes}  getSceneStyle={getSceneStyle}/>
    </Provider>
  );
}
