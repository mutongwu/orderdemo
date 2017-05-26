// import { Map, List } from 'immutable';

import {
  TEST_ACTION,
  TEST_ASYNC_ACTION_START,
  TEST_ASYNC_ACTION_ERROR,
  TEST_ASYNC_ACTION_SUCCESS,
} from './order.action';

const initialState = {
  loading: false,
  listData: [],
  error: null,
};

const actionsMap = {
  [TEST_ACTION]: (state) => {
    const counter = state.get('counter') + 1;

    return state;
  },

  // Async action
  // [TEST_ASYNC_ACTION_START]: (state) => {
  //   return state.merge({
  //     loading: true,
  //     error: null,
  //   });
  // },
  // [TEST_ASYNC_ACTION_ERROR]: (state, action) => {
  //   return state.merge({
  //     loading: false,
  //     error: action.data,
  //   });
  // },
  // [TEST_ASYNC_ACTION_SUCCESS]: (state, action) => {
  //   const tmp = state.merge({
  //     loading: false,
  //   });
  //   return tmp.setIn(['listData'], action.data);
  //   // return state.mergeDeep({
  //   //   loading: false,
  //   //   listData: action.data,
  //   // });
  // },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}