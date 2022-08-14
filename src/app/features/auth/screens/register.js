/*
 * Created Date: Saturday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, August 13th 2022, 8:43:08 am
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(undefined);

  const handleRegister = () => {
    register({ email, password, name });
  };
  const toLogin = () => {
    navigate("/login");
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-fixedBack bg-fixed bg-cover">
      <div className="bg-neutral-900 md:w-2/3 lg:w-1/3 w-96 flex justify-center items-center rounded-2xl shadow-inner shadow-yellow-700/50 border border-yellow-700 opacity-80 flex flex-col px-12 pt-16 pb-20 drop-shadow-xl">
        <span className=" text-yellow-700 font-bold text-3xl">Register</span>
        <span className=" text-gray-100 font-semibold text-lg">
          Already have an account?{" "}
          <span
            className=" text-yellow-700 font-bold text-LG cursor-pointer hover:underline"
            onClick={toLogin}
          >
            Login
          </span>
        </span>
        <input
          type="text"
          placeholder="Name"
          className=" bg-gray-100 w-full mt-6 rounded-sm h-12 px-4"
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={handleRegister}
        >
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
};
export default Register;
