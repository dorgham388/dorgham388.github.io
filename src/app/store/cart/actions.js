/*
 * Created Date: Wednesday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, June 18th 2022, 11:51:56 am
 * Modified By: Amir Dorgham
 * -----
 */

import { ADD_CART, REMOVE_CART } from "./actionTypes";

// ------------------
// ADD TO CART
export const cartAdd = (item) => (dispatch) => {
  dispatch({
    type: ADD_CART,
    payload: item,
  });
};

// ------------------
// REMOVE FROM CART
export const cartRemove = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_CART,
    payload: item,
  });
};
