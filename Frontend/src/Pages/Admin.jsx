import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Loginadmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginInput, setLoginInput] = useState({
    mail: "",
    mot_de_passe: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setLoginInput((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        loginInput
      );
      if (response.data) {
        localStorage.setItem("User", JSON.stringify(response.data));
        navigate("/Dashbordadmin");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300 ">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 border-2  bg-white shadow-xl border-gray-200 ">
        <div className="mb-8 text-center">
          <span className=" text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300 bg-clip-text text-transparent">
            WorkUp
          </span>

          <p className="text-sm dark:text-gray-400 mt-10">
            Enter your informations to access to your WorkUp admin account
          </p>
        </div>
        <form onSubmit={handleOnSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                value={loginInput.mail}
                name="mail"
                onChange={handleOnChange}
                id="email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="mot_de_passe"
                value={loginInput.mot_de_passe}
                onChange={handleOnChange}
                id="password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md inline-block bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300 p-[2px] text-white"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
