/*
 * Created Date: Wednesday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, June 18th 2022, 11:52:11 am
 * Modified By: Amir Dorgham
 * -----
 */

import { combineReducers } from "redux";
import randomReducer from "./auth/reducer";
import cartReducer from "./cart/reducer";

const appReducer = combineReducers({
  randomReducer,
  cartReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
