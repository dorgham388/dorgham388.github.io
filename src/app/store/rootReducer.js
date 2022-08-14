/*
 * Created Date: Wednesday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, August 13th 2022, 8:36:41 am
 * Modified By: Amir Dorgham
 * -----
 */

import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import cartReducer from "./cart/reducer";

const appReducer = combineReducers({
  authReducer,
  cartReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
