import React, { useState, useEffect } from "react";
import axios from "axios";

const Faqhome = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Faq/");
        setQuestions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

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
          {questions.map((question) => (
            <details
              key={question._id}
              className="w-full border-2 rounded-lg border-blue-600 shadow-lg"
            >
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                {question.question}
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
                {question.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqhome;
