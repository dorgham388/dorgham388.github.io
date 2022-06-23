/*
 * Created Date: Saturday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, June 18th 2022, 2:51:36 pm
 * Modified By: Amir Dorgham
 * -----
 */

import Login from "./screens/login";
import Signup from "./screens/signup";
import ForgotPassword from "./screens/forgotPassword";
import ResetPassword from "./screens/resetPassword";

const protectedRoutes = [];
const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
