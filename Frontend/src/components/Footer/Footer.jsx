import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-blue-600 p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl">
            Make Your Next Career Move &nbsp;!
          </strong>

          <a
            className="inline-flex items-center gap-2 rounded-lg border border-white bg-white px-8 py-3 text-blue-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
            href="Login"
          >
            <span className="text-sm font-medium"> Let's Get Started </span>

            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-1">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-blue-600 sm:justify-start">
              <Link href="/">
                <span className="inline-block h-10 w-52  bg-white">
                  <img src={Logo} alt="logo" />
                </span>
              </Link>
            </div>

            <p class="text-center sm:text-left mt-6 max-w-md leading-relaxed text-gray-500 sm:max-w-xs">
              Find the Job of your Dream with the Best Recrutement Web Site in
              Algéria
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-blue-600">Candidates</p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="Offresp"
                    >
                      Jobs
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="Entreprisesp"
                    >
                      Companies
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="Blog"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-blue-600">Recruiter</p>

              <nav aria-label="Footer Services Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link to={"/Recruteur#About"}>
                      <a className="text-gray-700 transition hover:text-gray-700/75">
                        About Us
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/Recruteur#Pricing"}>
                      <a className="text-gray-700 transition hover:text-gray-700/75">
                        Pricing
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/Recruteur#FAQ"}>
                      <a className="text-gray-700 transition hover:text-gray-700/75">
                        FAQ
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-blue-600">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-700">
                      contact@WorkUp.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-700">021 64 24 92</span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                    8 Quartier d'Affaires Bab Ezzouar Alger
                  </address>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="relative mx-auto max-w-screen-xl px-4 py-1 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                  <a
                    className="inline-block rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-gray-600 sm:p-3 lg:p-4"
                    href="#nav"
                  >
                    <span className="sr-only">Back to top</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-blue-600 underline transition hover:text-blue-600/75"
                href="/"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-blue-600 underline transition hover:text-blue-600/75"
                href="/"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2023 WorkUp
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
