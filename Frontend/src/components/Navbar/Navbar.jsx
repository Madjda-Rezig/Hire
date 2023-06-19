import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

function Navbar() {
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

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link to={"Login"}>
                <a className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow">
                  Login
                </a>
              </Link>

              <div className="hidden sm:flex">
                <Link to={"Register"}>
                  <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-semibold text-blue-600">
                    Register
                  </a>
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-blue-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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

export default Navbar;
