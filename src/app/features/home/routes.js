/*
 * Created Date: Saturday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Sunday, June 19th 2022, 4:37:16 pm
 * Modified By: Amir Dorgham
 * -----
 */

import Home from "./screens";

const protectedRoutes = [
  {
    path: "/home",
    element: <Home />,
  },
];
const publicRoutes = [];
export { publicRoutes, protectedRoutes };
