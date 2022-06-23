/*
 * Created Date: Wednesday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, June 18th 2022, 11:51:50 am
 * Modified By: Amir Dorgham
 * -----
 */

import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
} from "./actionTypes";

// ------------------
// REGISTER
export const register = (userData, history) => (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });
  return axios
    .post(`${process.env.REACT_APP_API_URL}/auth/register`, userData)
    .then((response) => {
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: USER_REGISTER_ERROR,
        payload: JSON.parse(e.response.request.response).errors,
      });
    });
};
