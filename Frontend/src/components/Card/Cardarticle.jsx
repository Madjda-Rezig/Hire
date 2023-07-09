import React from "react";
import { Link } from "react-router-dom";

const Cardarticle = ({ articles }) => {
  return (
    <section className="p-4 lg:p-8 bg-white text-black">
      <div className="container space-y-12 mx-auto">
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
