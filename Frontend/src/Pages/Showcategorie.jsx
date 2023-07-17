import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Showcategorie() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/categories/all"
        );
        if (response.data) {
          setCats(response.data.slice(0, 20));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <section className="flex justify-center">
        <div className="max-w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="text-center mb-8">
            <span className="text-4xl py-5 font-semibold sm:text-4xl bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 bg-clip-text text-transparent">
              All Categories
            </span>
          </div>
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cats.map((cat) => (
              <a
                key={cat.id}
                className="block rounded-xl border border-blue-600 p-4 shadow-sm hover:border-gray-600 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055V14z"
                    />
                  </svg>
                </span>
                <h4 className="mt-4 text-xl font-semibold text-gray-900">
                  {cat.nomcategorie}
                </h4>
                <p className="hidden mt-1 text-sm text-gray-600 md:block">
                  {cat.defcat}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
