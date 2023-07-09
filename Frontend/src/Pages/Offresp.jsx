import Cardjob from "../components/Card/Cardjob.jsx";
import Hero from "../assets/HeroJobs.jpg";
// import HeroJobs from "../components/Hero/Herojobs.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import Subscribe from "../components/Subscribe/Subscribe.jsx";
import { useDebounce } from "../hooks/useDebounce.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Offresp() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(0);
  const [offres, setOffres] = useState([]);
  const debounceValue = useDebounce(search, 350);
  useEffect(() => {
    const afficherOffre = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/offres/pagination?page=${currentPage}&search=${debounceValue}`
        );
        if (response.data) {
          setPages(response.data.pages);
          setOffres(response.data.offres);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    afficherOffre();
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
          backgroundImage: `url(${Hero})`,
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
            placeholder="Search a Job"
            className="w-3/5 p-3 rounded-lg sm:w-2/3 shadow-2xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="border-2 px-4 py-2.5 rounded-lg bg-blue-600 -translate-x-12">
            <FontAwesomeIcon icon={faSearch} className="text-white " />
          </div>
        </div>
        <div className="p-6 pb-8 items-center rounded-3xl w-10/12 mx-auto border mb-8 border-blue-600 border-opacity-50 backdrop-blur-xl shadow-gray-400 shadow-lg translate-y-1/2 ">
          <form className="flex flex-row justify-evenly items-end w-full gap-6 mx-auto">
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-white font-semibold tracking-wider">
                Contrat
              </label>
              <select className="rounded-xl border border-blue-600  hover:border-gray-600">
                <option value="">Tous</option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="Stage">Stage</option>
              </select>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-white font-semibold tracking-wider">
                Entreprise
              </label>
              <select className="rounded-xl border border-blue-600  hover:border-gray-600">
                <option value="">Tous</option>
                <option value="CDI">Djezzy</option>
                <option value="CDD">BNP</option>
                <option value="Stage">KPMG</option>
              </select>
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-white font-semibold tracking-wider">
                Expérience
              </label>
              <select className="rounded-xl border border-blue-600 hover:border-gray-600">
                <option value="">Tous</option>
                <option value="0-2">0-2 ans</option>
                <option value="2-5">2-5 ans</option>
                <option value="5+">5 ans et plus</option>
              </select>
            </div>
            <button
              type="submit"
              className="  font-semibold rounded-lg sm:w-1/5 hover:tracking-widest transition-all duration-150 bg-blue-600 text-white px-5 py-2.5  bg-gradient-to-r from-blue-400 to-blue-600 hover:contrast-200"
            >
              Rechercher
            </button>
          </form>
        </div>
      </section>
      <Cardjob offres={offres} />
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />

      <Subscribe />
    </div>
  );
}
