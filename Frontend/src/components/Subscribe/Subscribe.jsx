import React, { useState } from "react";
import axios from "axios";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/newsletter/subscribe",
        {
          mail: email,
        }
      );
      setMessage(response.data);
      setEmail("");
    } catch (error) {
      setMessage("Failed to subscribe to the newsletter.");
    }
  };

  return (
    <section className="py-6 bg-[#575252] text-white max-w-5xl mt-10 rounded-md mx-auto xl:px-4 xl:py-12 2xl:px-0">
      <div className="container  mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div className="flex flex-col space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-none">
            Never Miss Any Job News
          </h1>
        </div>
        <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
          <form onSubmit={handleSubscribe}>
            <input
              type="text"
              placeholder="Enter your email here"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3 text-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-blue-600 text-white"
            >
              Subscribe
            </button>
            {message && <p className="">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
