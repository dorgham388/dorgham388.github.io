/*
 * Created Date: Saturday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Sunday, August 14th 2022, 12:29:43 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, getUsers } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({ email, password });
  };
  const toRegister = () => {
    navigate("/register");
  };
  const handleUsers = () => {
    getUsers();
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-fixedBack bg-fixed bg-cover">
      <div className="bg-neutral-900 md:w-2/3 lg:w-1/3 w-96 flex justify-center items-center rounded-2xl shadow-inner shadow-yellow-700/50 border border-yellow-700 opacity-80 flex flex-col px-12 pt-16 pb-20 drop-shadow-xl">
        <span className=" text-yellow-700 font-bold text-3xl">Login</span>
        <span className=" text-gray-100 font-semibold text-lg">
          Don't have an account?{" "}
          <span
            className=" text-yellow-700 font-bold text-LG cursor-pointer hover:underline"
            onClick={toRegister}
          >
            Register
          </span>
        </span>
        <input
          type="email"
          placeholder="Email"
          className=" bg-gray-100 w-full mt-6 rounded-sm h-12 px-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className=" bg-gray-100 w-full mt-6 rounded-sm h-12 px-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className=" bg-yellow-700 w-full mt-12 rounded-sm h-12 text-gray-100 font-semibold hover: shadow-sm hover:shadow-yellow-100/30 hover:opacity-95"
          onClick={handleLogin}
        >
          LOGIN
        </button>
        <button
          className=" bg-yellow-700 w-full mt-12 rounded-sm h-12 text-gray-100 font-semibold hover: shadow-sm hover:shadow-yellow-100/30 hover:opacity-95"
          onClick={handleUsers}
        >
          GET USERS
        </button>
      </div>
    </div>
  );
};
export default Login;

// import { ThemeContext } from "app/utils/theme/index";
// const { theme, setTheme } = useContext(ThemeContext);

// const isDark = () => {
//   return theme === "dark";
// };
// const toggleDarkMode = () => {
//   setTheme(!isDark() ? "dark" : "light");
// };
