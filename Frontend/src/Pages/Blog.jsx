import Pagination from "../components/Pagination/Pagination.jsx";
import HeroBlogs from "../components/Hero/Heroblogs.jsx";
import CardArticle from "../components/Card/Cardarticle.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import { useDebounce } from "../hooks/useDebounce.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(0);
  const [articles, setArticles] = useState([]);
  const debounceValue = useDebounce(search, 350);
  useEffect(() => {
    const afficherArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/articles/pagination?page=${currentPage}&search=${debounceValue}`
        );
        if (response.data) {
          setPages(response.data.pages);
          setArticles(response.data.articles);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    afficherArticle();
  }, [currentPage, debounceValue]);
  if (loading)
    return (
      <h1 className="h-screen w-screen text-4xl text-center flex items-center justify-center">
        Loading
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
      </h1>
    );
  return (
    <div>
      <HeroBlogs />
      <section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-blue-600 mt-7">
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
            placeholder="Search a Job"
            className="w-3/5 p-3 rounded-lg sm:w-2/3 shadow-2xl my-6"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="border-2 px-4 py-2.5 rounded-lg bg-blue-600 -translate-x-12">
            <FontAwesomeIcon icon={faSearch} className="text-white " />
          </div>
        </div>
      </section>
      <CardArticle articles={articles} />
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
}
