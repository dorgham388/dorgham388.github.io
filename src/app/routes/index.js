/*
 * Created Date: Sunday June 19th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Sunday, June 19th 2022, 4:38:47 pm
 * Modified By: Amir Dorgham
 * -----
 */

import {
  publicRoutes as publicAuthRoutes,
  protectedRoutes as protectedAuthRoutes,
} from "app/features/auth/routes";
import {
  publicRoutes as publicHomeRoutes,
  protectedRoutes as protectedHomeRoutes,
} from "app/features/home/routes";

const getRoutes = () => {
  let publicRoutes = [...publicAuthRoutes, ...publicHomeRoutes];
  let protectedRoutes = [...protectedAuthRoutes, ...protectedHomeRoutes];

  return { publicRoutes, protectedRoutes };
};

export default getRoutes;
