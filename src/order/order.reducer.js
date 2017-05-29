// import { Map, List } from 'immutable';

import {
  TEST_ACTION,
  TEST_ASYNC_ACTION_START,
  TEST_ASYNC_ACTION_ERROR,
  TEST_ASYNC_ACTION_SUCCESS,
} from './order.action';


const initialState = (() => {
  const max = 20;
  let i = 0;
  const arr = [];
  let pic = 'http://a.vpimg2.com/upload/merchandise/pdcvis/603480/2017/0414/100/7e864ec6-741d-40e9-a4ee-b4d982d9dd87.jpg';
  // let pic = require('../images/login.jpg');
  while (i < max) {
    let rd = String(Math.random()).substr(3, 9);
    arr.push({
      id: i,
      num: rd,
      img: pic,
      goodsName: '2017夏上新经典休闲头层牛皮革平底女式凉鞋黑色',
      size: 'M',
      price: rd.substr(4, 6),
      status: (i % 2 === 0 ? '已完成' : '已取消')
    });
    i++;
  }
  return {
    orderData: arr
  }
})();

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