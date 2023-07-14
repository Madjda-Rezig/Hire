import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "react-feather";
import Login from "../../assets/1.jpeg";
import Logo from "../../assets/Logo Vert.svg";

const LoginForm = () => {
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

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
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
        navigate("/Dashbordrec");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="hero min-h-screen bg-[#1CD2B1]"
      style={{
        backgroundImage: `url(${Login})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cotrain",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form
            onSubmit={handleOnSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8 bg-white border-2 border-gray-200 shadow-xl"
          >
            <img src={Logo} alt="Logo" />

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={loginInput.mail}
                  name="mail"
                  onChange={handleOnChange}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  name="mot_de_passe"
                  value={loginInput.mot_de_passe}
                  onChange={handleOnChange}
                />

                <span
                  className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <Eye className="h-4 w-4 text-gray-400" />
                  ) : (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-[#1CD2B1] px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>

            <p className="text-center text-sm text-gray-500">
              No account?
              <Link to={"Recruteur"} className="underline">
                Go Back
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
