import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

function Footer() {
  return (
    <footer aria-label="Site Footer" class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center gap-4 rounded-lg bg-blue-600 p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong class="text-xl text-white sm:text-xl">
            Make Your Next Career Move!
          </strong>

          <a
            class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-blue-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
            href="Login"
          >
            <span class="text-sm font-medium"> Let's Get Started </span>

            <svg
              class="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-1">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="flex justify-center text-blue-600 sm:justify-start">
              <Link href="/">
                <span class="inline-block h-10 w-52  bg-white">
                  <img src={Logo} alt="logo" />
                </span>
              </Link>
            </div>

            <p class="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Find the Job of your Dream with the Best Recrutement Web Site in
              Algéria
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div class="text-center sm:text-left">
              <p class="text-lg font-semibold text-blue-600">Candidates</p>

              <nav aria-label="Footer About Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="Offres"
                    >
                      Jobs
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="Entreprises"
                    >
                      Companies
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="Blog"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-semibold text-blue-600">Recruiter</p>

              <nav aria-label="Footer Services Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-semibold text-blue-600">Contact Us</p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span class="flex-1 text-gray-700">contact@WorkUp.com</span>
                  </a>
                </li>

                <li>
                  <a
                    class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span class="flex-1 text-gray-700">021 64 24 92</span>
                  </a>
                </li>

                <li class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address class="-mt-0.5 flex-1 not-italic text-gray-700">
                    8 Quartier d'Affaires Bab Ezzouar Alger
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-gray-100 pt-6">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <p class="text-sm text-gray-500">
              <span class="block sm:inline">All rights reserved.</span>

              <a
                class="inline-block text-blue-600 underline transition hover:text-blue-600/75"
                href="/"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                class="inline-block text-blue-600 underline transition hover:text-blue-600/75"
                href="/"
              >
                Privacy Policy
              </a>
            </p>

            <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2023 WorkUp
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
