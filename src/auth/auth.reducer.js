// import { Map } from 'immutable';
// import { hashHistory } from 'react-router';

import {
  AUTH_LOGIN_START,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_REDIRECT_URL,
  AUTH_NAVIGATE_TO,
  AUTH_LOGOUT_SUCCESS,
} from './auth.action';

const initialState = {
  isLoggedIn: false,
  currentURL: '/',
  loading: false,
  authData: null,
};

const actionsMap = {
  [AUTH_LOGIN_START]: (state) => {
    // const counter = state.get('counter') + 1;
    return Object.assign({}, state, {
      loading: true
    });
  },

  [AUTH_LOGIN_ERROR]: (state, action) => {
    return Object.assign({}, state, {
      isLoggedIn: false,
      loading: false,
      asyncError: action.data,
    });
  },
  [AUTH_LOGIN_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      isLoggedIn: true,
      loading: false,
      authData: action.data,
    });
  },
  [AUTH_REDIRECT_URL]: (state, action) => {
    return Object.assign({}, state, {
      currentURL: action.data,
    });
  },
  [AUTH_NAVIGATE_TO]: (state, action) => {
    return Object.assign({}, state, {
      currentURL: action.data,
    });
  },
  [AUTH_LOGOUT_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      isLoggedIn: false,
      loading: false,
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}