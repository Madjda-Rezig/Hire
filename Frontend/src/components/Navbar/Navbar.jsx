import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const user = localStorage.getItem("User");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const user = localStorage.getItem("User");
      const token = JSON.parse(user).accessToken;
      await axios.delete(`http://localhost:5000/auth/logout/${token}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem("User");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleDropdownToggle = () => {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("hidden");
  };

  return (
    <header aria-label="Site Header" className="bg-white" id="nav">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex lg:w-0 lg:flex-1">
              <Link to={"/"}>
                <span className="inline-block h-10 w-44  bg-white">
                  <img src={Logo} alt="logo" />
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-20 text-lg">
                <li>
                  <Link
                    to={"/Offresp"}
                    className="text-blue-600 font-semibold transition  hover:text-gray-500/75"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Entreprisesp"}
                    className="text-blue-600 font-semibold transition hover:text-gray-500/75"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to={"Blog"}
                    className="text-blue-600 font-semibold transition hover:text-gray-500/75"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {!user && (
                <Link
                  to={"Login"}
                  className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow"
                >
                  Login
                </Link>
              )}

              <div className="hidden sm:flex">
                {user ? (
                  <div className="dropdown dropdown-end ">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={avatar} alt="avatar" />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to={"/Profile"} className="justify-between">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/Myapplications"}
                          className="justify-between"
                        >
                          My Applications
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleLogout}>Logout</Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={"Register"}
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-semibold text-blue-600"
                  >
                    Register
                  </Link>
                )}
              </div>
            </div>

            <div className="block md:hidden relative">
              <button
                id="dropdownButton"
                className="rounded bg-gray-100 p-2 text-blue-600 transition hover:text-gray-600/75 py-2 px-2"
                onClick={handleDropdownToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div
                id="dropdownMenu"
                className="hidden absolute right-0 mt-2 py-2 w-24 bg-white border rounded shadow-lg z-10"
              >
                <ul>
                  <li>
                    <Link
                      to={"/Offresp"}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Entreprisesp"}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"Blog"}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
