import React from "react";

const Faqhome = () => {
  return (
    <section className="bg-white text-black ">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-bold sm:text-4xl text-center text-blue-600">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 text-black text-center">
          Welcome to our FAQ section, where we address common inquiries about
          our recruitment platform and services.
        </p>
        <div className="space-y-4">
          <details className="w-full border-2 rounded-lg border-blue-600">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              Is using this website free for candidates?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
              Yes, using our website is completely free for candidates. You can
              search for job openings, apply to job ads, and create a profile
              without any charges.
            </p>
          </details>
          <details className="w-full border-2 rounded-lg border-blue-600">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              How does this recruitment website work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
              Our recruitment website functions as an online platform where
              employers can post job vacancies and candidates can search and
              apply for those positions. Candidates can create a profile, upload
              their resume, and search for jobs that match their skills and
              interests. Employers can view candidate profiles and contact them
              directly.
            </p>
          </details>
          <details className="w-full border-2 rounded-lg border-blue-600">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              How can I improve my chances of getting hired?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
              Here are some tips to improve your chances of getting hired:
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
              - Tailor your resume and cover letter to highlight relevant skills
              and experiences.
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
              - Research the company and the job position to demonstrate your
              interest and knowledge during interviews.
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
              - Network and connect with professionals in your desired industry.
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
              - Enhance your skills through online courses, certifications, or
              relevant training programs.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faqhome;
