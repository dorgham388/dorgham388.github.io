/*
 * Created Date: Tuesday May 11th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Sunday, June 19th 2022, 3:59:59 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
