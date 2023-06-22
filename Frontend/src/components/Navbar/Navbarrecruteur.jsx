import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo Vert.svg";
import avatar from "../../assets/avatar.jpg";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbarrecruteur() {
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
      navigate("/Recruteur");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <header aria-label="Site Header" className="bg-white" id="Nav">
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
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <a
                    className="text-[#1CD2B1] font-semibold transition  hover:text-gray-500/75"
                    href="#About"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#1CD2B1] font-semibold transition hover:text-gray-500/75"
                    href="#Pricing"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#1CD2B1] font-semibold transition hover:text-gray-500/75"
                    href="#FAQ"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#1CD2B1] font-semibold transition hover:text-gray-500/75"
                    href="#Contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex ">
                {user ? (
                  <div className="dropdown dropdown-end ">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={avatar} />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to={"/Profile"}>
                          <a className="justify-between">Profile</a>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/Myapplications"}>
                          <a className="justify-between">My applications</a>
                        </Link>
                      </li>

                      <li>
                        <a onClick={handleLogout}>Logout</a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to={"Loginrecruteur"}>
                    <a className="rounded-md bg-[#1CD2B1] px-5 py-2.5 text-sm font-semibold text-white">
                      Login
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-[#1CD2B1] transition hover:text-gray-600/75">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbarrecruteur;
