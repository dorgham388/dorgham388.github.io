/*
 * Created Date: Wednesday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, August 13th 2022, 6:04:50 pm
 * Modified By: Amir Dorgham
 * -----
 */

import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
} from "./actionTypes";

const initialState = {
  loading: false,
  isAuthenticated: false,
  errors: [],
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // REGISTER
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        errors: [],
        loading: true,
      };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };
    case USER_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    // LOGIN
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        errors: [],
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};
export default authReducer;
