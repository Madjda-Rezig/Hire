import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function ShowSubscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const user = JSON.parse(localStorage.getItem("User"));

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/newsletter/Link>ll",
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        const data = await response.json();
        setSubscribers(data);
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.message);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className=" mt-14 text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-10 ">
          Subscribers to our Newsletter
        </h2>

        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ml-6">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                Email
              </td>
              <td className="whitespace-nowrap px-10 py-2 text-gray-700 font-bold">
                Role
              </td>
            </tr>
            {subscribers.map((subscriber) => (
              <tr key={subscriber}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {subscriber}
                </td>
                <td className="whitespace-nowrap px-10 py-2 text-gray-700">
                  Candidat
                </td>
                <td>
                  <button className="whitespace-nowrap px-4 py-2">
                    <Link className="inline-block rounded bg-gradient-to-r from-[#1CD2B1] to-blue-600 px-4 py-2 text-xs font-semibold text-white">
                      Delete
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
