import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroCompanyImage from "../../assets/HeroCompany.jpg";
import { Link } from "react-router-dom";

const Popular = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articles/");
        if (response.data) {
          setArticles(response.data.slice(0, 4));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="py-6 sm:py-12 bg-white text-gray-600">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Other Articles</h2>
          <p className="font-serif text-sm text-gray-400">
            Explore a diverse selection of captivating articles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col bg-gray-100 shadow-xl border-gray-200 border-2"
            >
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 bg-gray-500"
                  src={`http://localhost:5000/images/${article.photo}`}
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  className="text-xs tracking-wider uppercase hover:underline text-blue-600"
                >
                  {article.categorie}
                </Link>

                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  {article.titre}
                </h3>

                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                  <span>{formatDate(article.date_creation)}</span>
                  <span>{article.autheur}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
