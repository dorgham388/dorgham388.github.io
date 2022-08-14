/*
 * Created Date: Saturday August 13th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Sunday, August 14th 2022, 1:35:31 pm
 * Modified By: Amir Dorgham
 * -----
 */

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
} from "app/store/actions";
import { doLogin, doRegister, doGetUsers } from "../api";

const UseAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = (data) => {
    dispatch(registerRequest());
    doRegister(data)
      .then((data) => {
        dispatch(registerSuccess(data));
        navigate("/");
      })
      .catch((e) => {
        dispatch(registerError(e));
      });
  };

  const login = (data) => {
    dispatch(loginRequest());
    doLogin(data)
      .then((data) => {
        dispatch(loginSuccess(data));
        navigate("/");
      })
      .catch((e) => {
        dispatch(loginError(e));
      });
  };

  const getUsers = (data) => {
    // dispatch(getUsersRequest());
    doGetUsers(data)
      .then((data) => {
        // dispatch(getUsersSuccess(data));
      })
      .catch((e) => {
        // dispatch(getUsersError(e));
      });
  };

  return {
    register,
    login,
    getUsers,
  };
};
export default UseAuth;
