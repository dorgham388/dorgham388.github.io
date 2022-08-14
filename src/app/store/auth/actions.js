/*
 * Created Date: Sunday August 14th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Sunday, August 14th 2022, 11:45:08 am
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

// ------------------
// REGISTER
export const registerRequest = () => (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });
};
export const registerSuccess = (data) => (dispatch) => {
  dispatch({
    type: USER_REGISTER_SUCCESS,
    payload: data,
  });
};
export const registerError = (error) => (dispatch) => {
  dispatch({
    type: USER_REGISTER_ERROR,
    payload: error,
  });
};

// ------------------
// LOGIN
export const loginRequest = () => (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });
};
export const loginSuccess = (data) => (dispatch) => {
  dispatch({
    type: USER_LOGIN_SUCCESS,
    payload: data,
  });
};
export const loginError = (error) => (dispatch) => {
  dispatch({
    type: USER_LOGIN_ERROR,
    payload: error,
  });
};
