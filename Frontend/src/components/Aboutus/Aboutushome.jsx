import React from "react";
import Image4 from "../../assets/Group 38.png";
import img from "../../assets/Login.jpg";

const Aboutushome = () => {
  return (
    <section className="bg-white text-blue-600">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-blue-600">
            About Us
          </h2>
          <p className="max-w-5xl mx-auto mt-4 text-xl text-center text-gray-500">
            At WokUp, We strive to provide a platform that not only matches job
            seekers with the right opportunities but also assists in their
            career development.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mt-3 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 text-blue-600">
                    Comprehensive Employer Branding
                  </h4>
                  <p className="mt-2 text-gray-600">
                    We provide companies with the opportunity to showcase their
                    unique employer value proposition, company culture, and
                    growth opportunities.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 text-blue-600">
                    Streamlined Recruitment Process
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Our platform offers tools that simplify every stage of
                    recruitment,our goal is to save time and resources, allowing
                    companies to focus on what matters most finding the right
                    talent.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md  bg-blue-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 text-blue-600">
                    Access to a Diverse Talent Pool
                  </h4>
                  <p className="mt-2 text-gray-600">
                    We believe in the power of diversity and inclusion in the
                    workplace. We actively promote equal opportunities and
                    assist companies in adopting inclusive hiring practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              src={Image4}
              alt="image"
              className="mx-auto rounded-lg shadow-lg bg-white border-2 border-blue-600 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutushome;
