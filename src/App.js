/*
 * Created Date: Sunday June 19th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Sunday, June 19th 2022, 4:38:57 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import "./App.css";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import ProtectedLayout from "app/layouts/protected";
import getRoutes from "./app/routes";

function App() {
  const { publicRoutes, protectedRoutes } = getRoutes();
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={"/home"} replace />} />
        <Route
          element={<ProtectedLayout isAllowed={false} redirectPath="/login" />}
        >
          {protectedRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        {publicRoutes.map((route, idx) => (
          <Route path={route.path} element={route.element} key={idx} />
        ))}

        {/* <Route
          path="analytics"
          element={
            <ProtectedLayout
              redirectPath="/login"
              isAllowed={!!user && user.permissions.includes("analyze")}
            >
              <Analytics />
            </ProtectedLayout>
          }
        /> 
         <Route
          path="admin"
          element={
            <ProtectedLayout
              redirectPath="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedLayout>
          }
        /> */}

        <Route path="*" element={<div>404 notfound</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
