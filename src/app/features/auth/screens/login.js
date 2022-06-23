/*
 * Created Date: Saturday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, June 18th 2022, 4:11:40 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useContext } from "react";
import { ThemeContext } from "app/utils/theme/index";

const Login = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = () => {
    return theme === "dark";
  };
  return (
    <div className=" bg-yellow-500 dark:bg-gray-500">
      <button onClick={() => setTheme(!isDark() ? "dark" : "light")}>
        Login
      </button>
    </div>
  );
};
export default Login;
