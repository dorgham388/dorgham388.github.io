/*
 * Created Date: Wednesday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, June 18th 2022, 11:52:03 am
 * Modified By: Amir Dorgham
 * -----
 */

import { ADD_CART, REMOVE_CART } from "./actionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CART:
      return {
        ...state,
        cart: isItemInCart(state.cart, payload)
          ? alterItemCount(state.cart, payload, 1)
          : [...state.cart, { ...payload, count: 1 }],
      };

    case REMOVE_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
export default cartReducer;

export const isItemInCart = (items, { id }) =>
  !!items.find((item) => item.id === id);

export const itemCount = (arr, { id }) =>
  arr.reduce((a, v) => (v === id ? a + 1 : a), 0);

export const alterItemCount = (items, { id }, op) => {
  let position = items.findIndex((item) => item.id === id);
  let item = items.find((item) => item.id === id);
  item.count = item.count + op;
  // array.filter((item) => item.count !== 0);
  return [...items].splice(position, 1, item);
};
