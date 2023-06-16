import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo Vert.svg";

function Navbarrecruteur() {
  return (
    <header aria-label="Site Header" class="bg-white" id="Nav">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <div class="flex lg:w-0 lg:flex-1">
              <Link to={"/"}>
                <span class="inline-block h-10 w-44  bg-white">
                  <img src={Logo} alt="logo" />
                </span>
              </Link>
            </div>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Site Nav">
              <ul class="flex items-center gap-6 text-lg">
                <li>
                  <a
                    class="text-[#1CD2B1] font-semibold transition  hover:text-gray-500/75"
                    href="#About"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    class="text-[#1CD2B1] font-semibold transition hover:text-gray-500/75"
                    href="#Pricing"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a
                    class="text-[#1CD2B1] font-semibold transition hover:text-gray-500/75"
                    href="#FAQ"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    class="text-[#1CD2B1] font-semibold transition hover:text-gray-500/75"
                    href="#Contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <div class="hidden sm:flex ">
                <Link to={"Loginrecruteur"}>
                  <a class="rounded-md bg-[#1CD2B1] px-5 py-2.5 text-sm font-semibold text-white">
                    Login
                  </a>
                </Link>
              </div>
            </div>

            <div class="block md:hidden">
              <button class="rounded bg-gray-100 p-2 text-[#1CD2B1] transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
