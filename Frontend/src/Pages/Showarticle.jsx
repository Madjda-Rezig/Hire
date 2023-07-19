import React, { useState, useEffect } from "react";
import axios from "axios";

function Showarticle() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Define the backend endpoint URL
    const backendEndpoint = "http://localhost:5000/articles/"; // Replace this with your actual backend endpoint URL

    // Make the HTTP request to fetch the articles
    axios
      .get(backendEndpoint)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="mt-14 text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-10">
          List of all Articles
        </h2>
        <table className="table w-full">
          <tbody>
            <tr>
              <td>titre</td>
              <td>categorie</td>
              <td>autheur</td>
            </tr>
            {articles.map((article) => (
              <tr key={article._id}>
                <td>{article.titre}</td>
                <td>{article.categorie}</td>
                <td>{article.autheur}</td>
                <td>
                  <button className="btn btn-ghost btn-sm bg-gradient-to-r from-[#1CD2B1] to-blue-600 px-4 py-2 text-xs font-semibold text-white">
                    Delete
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

export default Showarticle;
