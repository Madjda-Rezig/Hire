import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "../../assets/HeroCompany.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Articl = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/articles/${id}`
        );
        setArticle(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticle();
  }, [id]);
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-10 bg-white text-gray-100">
        <div className="flex flex-col max-w-fit overflow-hidden rounded">
          <img
            src={Image}
            alt="imageArticle"
            className="w-screen h-72 sm:h-96 rounded-lg shadow-xl"
          />
          <div className="p-6 pb-12 m-4 -mt-16 space-y-6 sm:px-10 sm:mx-12 lg:rounded-md bg-white border-2 border-blue-600 shadow-xl">
            <div className="space-y-2">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl text-blue-600"
              >
                {article.titre}
              </Link>
              <p className="text-xs text-gray-400">
                By{" "}
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  REZIG MADJDA
                </Link>
              </p>
            </div>
            <div className="text-gray-600 text-justify">
              <p>{article.contenu}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          className="group flex items-center justify-between gap-4 rounded-lg border border-blue-600 bg-blue-600 px-16 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
          href="/Blog"
        >
          <span className="font-semibold text-white transition-colors group-hover:text-blue-600 group-active:text-gray-600">
            Go Back
          </span>
          <span className="shrink-0 rounded-full border border-current bg-white p-2 text-blue-600 group-active:text-gray-600">
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Articl;
