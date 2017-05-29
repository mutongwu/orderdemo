import api from './auth.api';
import authUtil from '../utils/authUtil';

export const AUTH_LOGIN_START = 'AUTH_LOGIN_START';
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_REDIRECT_URL = 'AUTH_REDIRECT_URL';
export const AUTH_NAVIGATE_TO = 'AUTH_NAVIGATE_TO';



export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';

export const AUTH_GET = 'AUTH_CHECK';
export const AUTH_SET = 'AUTH_SET';
export const AUTH_DEL = 'AUTH_DEL';


export function authGet() {
  return {
    type: AUTH_GET,
  };
}

export function loginStart() {
  return {
    type: AUTH_LOGIN_START,
  };
}

export function setRedirectUrl(data) {
  return {
    type: AUTH_REDIRECT_URL,
    data,
  };
}
export function navigateTo(data) {
  return {
    type: AUTH_NAVIGATE_TO,
    data,
  };
}

function loginSuccess(data) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    data,
  };
}
function logoutSuccess(data) {
  return {
    type: AUTH_LOGOUT_SUCCESS,
    data,
  };
}

function loginError(error) {
  return {
    type: AUTH_LOGIN_ERROR,
    error,
  };
}

export function doLogin(val) {
  return function (dispatch) {
    dispatch(loginStart());

    // api.testAsync()
    authUtil.setToken(val)
      .then(data => dispatch(loginSuccess(data)))
      .catch(error => dispatch(loginError(error)));
  };
}

export function doLogout() {
  return function (dispatch) {
    // dispatch(loginStart());

    authUtil.delToken()
      .then(data => dispatch(logoutSuccess(data)))
      .catch(error => dispatch(loginError(error)));
  };
}

export function doAuthCheck() {
  return function (dispatch) {
    // dispatch(authGet());

    authUtil.getToken()
      .then(data => data && dispatch(loginSuccess(data)))
      .catch(error => dispatch(loginError(error)));
  };
}