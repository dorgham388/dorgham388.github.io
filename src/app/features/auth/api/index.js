/*
 * Created Date: Sunday August 14th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Sunday, August 14th 2022, 12:37:03 pm
 * Modified By: Amir Dorgham
 * -----
 */

import axios from "axios";

// ------------------
// REGISTER
export const doRegister = (data) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/users/create`, data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((e) => {
      return Promise.reject(JSON.parse(e.response.request.response).errors);
    });
};

// ------------------
// LOGIN
export const doLogin = (data) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/auth`, data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((e) => {
      return Promise.reject(JSON.parse(e.response.request.response).errors);
    });
};

export const doGetUsers = (limit = 10, page = 1) => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmY3YzBmYmJlNzY4YTA4ZDhlYTFjZGIiLCJwZXJtaXNzaW9uTGV2ZWwiOjEsInNob3VsZFJlY2VpdmVJbmZvcm1hdGlvbnMiOmZhbHNlLCJwcm92aWRlciI6ImVtYWlsIiwidXNlcklkZW50aXR5Ijp7ImVtYWlsIjoiZG9yZ2hhbTM4OEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjFUczdzakNhMStzZnM3c3dOUDhPUnc9PSQrQ1pKWGVhT05PejNhQnhsY1FLMlI1dG4wcWpGalRsM1BkTHZpZW5DOHZEdW9CeHo2dTVaR1lnMFpXSTlud0NlNnZWMkVkdEplNnhZRGF0ajQ5YkUwQT09IiwibmFtZSI6IkFtaXIifSwicmVmcmVzaEtleSI6IkR3OTEybmtrT3Q0aXhvazZneFNIUWc9PSIsImlhdCI6MTY2MDQwMzk3MX0.SWmv6BZa0iMgn2-sQDxg_4rezFHlIfDpdHjk-vfHPVY",
      },
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((e) => {
      return Promise.reject(JSON.parse(e.response.request.response).errors);
    });
};
