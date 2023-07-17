import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Addfaqcandidat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const user = JSON.parse(localStorage.getItem("User"));

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      question: question,
      answer: answer,
    };

    axios
      .post("http://localhost:5000/Faq/add", formData, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((response) => {
        toast.success("FAQ created successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="w-2/3 mx-auto">
      <form
        className="my-40 space-y-5 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border-2"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <span className="text-4xl py-5 font-semibold sm:text-4xl bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 bg-clip-text text-transparent">
            Add Candidat FAQ
          </span>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Question:</span>
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <label className="label">
              <span className="label-text">Answer:</span>
            </label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              name="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full rounded-lg px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300"
        >
          Add the FAQ
        </button>
      </form>
    </div>
  );
}
