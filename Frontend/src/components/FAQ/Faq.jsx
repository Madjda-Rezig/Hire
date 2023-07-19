import React, { useEffect, useState } from "react";
import axios from "axios";

const Faq = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetchFaqData();
  }, []);

  const fetchFaqData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/Faq/REC");
      setFaqData(response.data);
    } catch (error) {
      console.error("Error fetching FAQ data:", error);
    }
  };

  return (
    <section className="bg-[#1CD2B1] bg-opacity-10 text-gray-600" id="FAQ">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-[#1CD2B1]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
          {faqData.map((faq, index) => (
            <details key={index}>
              <summary className="py-5 outline-none cursor-pointer focus:underline ">
                {faq.question}
              </summary>
              <div className="px-4 pb-4">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
