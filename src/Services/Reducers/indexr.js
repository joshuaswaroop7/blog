// this is also called root reducer, which combines all redusers to root reducer
import { combineReducers } from "redux";
import cartItems from "./reducers";
//import user from './reducers' // for example

export default combineReducers({
  cartItems,
  // user
});
