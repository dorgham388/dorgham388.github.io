/*
 * Created Date: Saturday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, August 13th 2022, 7:57:48 am
 * Modified By: Amir Dorgham
 * -----
 */

import Login from "./screens/login";
import Register from "./screens/register";
import ForgotPassword from "./screens/forgotPassword";
import ResetPassword from "./screens/resetPassword";

const protectedRoutes = [];
const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
];
export { publicRoutes, protectedRoutes };
