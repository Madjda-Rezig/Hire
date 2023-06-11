import React from "react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Login from "../../assets/Login.jpg";
import Logo from "../../assets/Logo.svg";

function Logform() {
  const user = localStorage.getItem("User") || null;
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/Offres");
  }, []);
  const [loginInput, setLoginInput] = useState({
    mail: "",
    mot_de_passe: "",
  });
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
        navigate("/Offres");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div class="h-screen md:flex">
        <div
          class="relative overflow-hidden md:flex w-1/2  i justify-around items-center hidden"
          style={{
            backgroundImage: `url(${Login})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form
            onSubmit={handleOnSubmit}
            class="bg-white border-2 border-blue-600 rounded-3xl pt-8 pb-8 pr-10 pl-10"
          >
            <img src={Logo} />
            <h1 class="text-blue-600 font-bold text-5xl mb-12 text-center">
              Welcome Back!
            </h1>

            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 border-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none"
                type="text"
                value={loginInput.mail}
                name="mail"
                onChange={handleOnChange}
                placeholder="Email Address"
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl border-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none"
                type="password"
                name="mot_de_passe"
                value={loginInput.mot_de_passe}
                onChange={handleOnChange}
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              class="block w-full bg-blue-600 mt-9 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>

            <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer ">
              You don't have an account? Register
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Logform;
