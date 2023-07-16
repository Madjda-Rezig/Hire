import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Showfaqrec() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Faq/faqsREC");
        setFaqs(response.data.faqs);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des questions.",
          error
        );
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div>
      <section className="bg-white text-black ">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-10 mt-5">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                className="w-full border-2 rounded-lg border-blue-600"
                key={faq.id}
              >
                <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                  {faq.question}
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
