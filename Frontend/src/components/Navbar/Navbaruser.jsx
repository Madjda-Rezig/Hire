import React from "react";
import avatar from "../../assets/avatar.jpg";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.svg";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbaruser = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const user = localStorage.getItem("User");
      const token = JSON.parse(user).accessToken;
      await axios.delete(`http://localhost:5000/auth/logout/${token}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem("User");
      navigate("/Login");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <header aria-label="Site Header" className="bg-white">
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
                  <Link to={"Offresp"}>
                    <a className="text-blue-600 font-semibold transition  hover:text-gray-500/75">
                      Jobs
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to={"Entreprisesp"}>
                    <a className="text-blue-600 font-semibold transition hover:text-gray-500/75">
                      Companies
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to={"Blog"}>
                    <a className="text-blue-600 font-semibold transition hover:text-gray-500/75">
                      Blog
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="dropdown dropdown-end mr-8">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"#"}>
                  <a className="justify-between">Profile</a>
                </Link>
              </li>
              <li>
                <a>Parametres</a>
              </li>
              <li>
                <a onClick={handleLogout}>Déconnexion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbaruser;
