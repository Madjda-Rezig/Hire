import Pagination from "../components/Pagination/Pagination.jsx";
//import HeroCompany from "../components/Hero/Herocompany.jsx";
import CardCompany from "../components/Card/Cardcompany.jsx";
import Parteners from "../components/Parteners/Parteners.jsx";
import React from "react";
import { useDebounce } from "../hooks/useDebounce.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import HeroCompany from "../assets/HeroCompany.jpg";

export default function Entreprisesp() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(0);
  const [entreprises, setEntreprises] = useState([]);
  const debounceValue = useDebounce(search, 350);
  useEffect(() => {
    const afficherEntreprises = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/entreprises/pagination?page=${currentPage}&search=${debounceValue}`
        );
        if (response.data) {
          setPages(response.data.pages);
          console.log(response.data);
          setEntreprises(response.data.entreprises);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    afficherEntreprises();
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
      <section
        className=" dark:text-gray-100 "
        style={{
          backgroundImage: `url(${HeroCompany})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl text-white mb-40">
            Our Job is to Help to Find a Job
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center w-1/3 mx-auto pb-20">
          <input
            type="text"
            placeholder="&#128269; Search a Job"
            className="w-3/5 p-3 rounded-lg sm:w-2/3 shadow-2xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <CardCompany entreprises={entreprises} />
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />

      <h1 className="text-blue-600 text-3xl  text-center font-bold bg-blue-100 mb-7 pt-5 pb-5 mt-7">
        Our Parteners
      </h1>

      <Parteners />
    </div>
  );
}
