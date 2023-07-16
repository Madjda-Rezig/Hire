import React, { useEffect, useState } from "react";

export default function ShowSubscribers() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch("http://localhost:5000/newsletter/all");
        const data = await response.json();
        setSubscribers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubscribers();
  }, []);

  const deleteSubscriber = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/newsletter/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setSubscribers((prevSubscribers) =>
          prevSubscribers.filter((subscriber) => subscriber._id !== id)
        );
      } else {
        console.error("Failed to delete subscriber");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
                  <button
                    className="whitespace-nowrap px-4 py-2"
                    onClick={() => deleteSubscriber(subscriber._id)}
                  >
                    <a className="inline-block rounded bg-gradient-to-r from-[#1CD2B1] to-blue-600 px-4 py-2 text-xs font-semibold text-white ">
                      Delete
                    </a>
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
