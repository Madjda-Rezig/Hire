import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export default function Showfaqrec() {
  const [questions, setQuestions] = useState([]);
  const user = JSON.parse(localStorage.getItem("User"));

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Faq/faqs", {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        });
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
        toast.error(error.response.data.message);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <section className="bg-white text-black">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-10 mt-5">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {questions.map((question) => (
              <details
                className="w-full border-2 rounded-lg border-blue-600"
                key={question.id}
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
    </div>
  );
}
