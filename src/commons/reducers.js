import { combineReducers } from 'redux';
import order from '../order/order.reducer';
import auth from '../auth/auth.reducer';

export default combineReducers({
  order,
  auth,
});
