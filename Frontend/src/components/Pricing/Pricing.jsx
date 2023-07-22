import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section className="py-20 bg-white text-[#1CD2B1]" id="Pricing">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase text-[#1CD2B1]">
            Pricing
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl">
            Choose your best plan
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-white drop-shadow-2xl h-full">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">Basic Plan</h4>
              <span className="text-6xl font-bold">Free</span>
              <span className="text-sm tracking-wide">/1month</span>
            </div>
            <p className="mt-3 leading-relaxed text-gray-600">
              Designed for small businesses and startups.
            </p>
            <ul className="flex-1 mb-6 text-gray-600">
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-[#1CD2B1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Limited job postings.</span>
              </li>

              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-[#1CD2B1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Restricted CV database.</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-[#1CD2B1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Basic customer support.</span>
              </li>
            </ul>
            <a
              type="button"
              href="#Contact"
              className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-[#1CD2B1] text-white"
            >
              Contact Us
            </a>
          </div>
          <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-[#1CD2B1] text-white drop-shadow-2xl h-full">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">Premium Plan</h4>
              <span className="text-6xl font-bold">24K</span>
              <span className="text-sm tracking-wide">Dz/month</span>
            </div>
            <p className="mt-3 leading-relaxed text-gray-600">
              Perfect for growing businesses and companies.
            </p>
            <ul className="flex-1 mb-6 text-gray-600">
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Unlimited job postings.</span>
              </li>

              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Access to CV database.</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Priority customer support.</span>
              </li>
            </ul>
            <a
              type="button"
              href="#Contact"
              className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-white text-[#1CD2B1]"
            >
              Contact Us
            </a>
          </div>
          <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-white drop-shadow-2xl h-full">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">Enterprise Plan</h4>
              <span className="text-6xl font-bold">72K</span>
              <span className="text-sm tracking-wide">Dz/month</span>
            </div>
            <p className="mt-3 leading-relaxed text-gray-600">
              Organizations with high recruitment needs.
            </p>
            <ul className="flex-1 mb-6 text-gray-600">
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-[#1CD2B1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Unlimited job postings</span>
              </li>

              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-[#1CD2B1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Email notifications.</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-[#1CD2B1]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Analytics and reporting features.</span>
              </li>
            </ul>
            <a
              href="#Contact"
              type="button"
              className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-[#1CD2B1] text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
