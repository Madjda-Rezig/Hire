import React from "react";
import { Link } from "react-router-dom";

const Cardarticle = ({ articles }) => {
  return (
    <section className="p-4 lg:p-8 bg-white text-black">
      <div className="container space-y-12 mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-blue-600">
            Explore Our Blog to Find Your Dream Job
          </h2>
          <p className="mt-4 text-gray-600">
            From crafting a compelling resume to mastering interview techniques
            and skill development, our blog is your ally in navigating your
            career path
          </p>
        </div>
        <div className="flex flex-row justify-center items-center w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search an Article"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-blue-600 text-white"
          >
            Search
          </button>
        </div>

        {articles.map((article) => (
          <div
            className="flex flex-col overflow-hidden rounded-md shadow-xl lg:flex-row"
            key={article.id}
          >
            <img
              src={`http://localhost:5000/images/${article.photo}`}
              alt=""
              className="h-80 bg-white aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-white">
              <h3 className="text-3xl font-bold text-blue-600">
                {article.titre}
              </h3>
              <p className="my-6 text-gray-600">{article.resume}</p>
              <Link
                to={`/Article/${article._id}`}
                type="button"
                className="self-start text-gray-600"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cardarticle;
