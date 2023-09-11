import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categorie = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/categories/all"
        );
        if (response.data) {
          setCats(response.data.slice(0, 6));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="flex justify-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl text-blue-600 pb-10">
              Find your career path
            </h2>
            <p className="mt-4 text-gray-600 pb-4 text-justify">
              Whether you're looking for an exciting career in technology,
              administration, marketing, or other exciting fields, our platform
              is filled with opportunities for you. Explore our categories to
              discover various positions, and open the door to a promising
              professional future!
            </p>
            <Link
              to={"Offresp"}
              className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-lg font-semibold text-white transition hover:bg-gray-600 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              See More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {cats.map((cat) => (
              <Link
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
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  {cat.defcat}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categorie;
