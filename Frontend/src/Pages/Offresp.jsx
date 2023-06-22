import Cardjob from "../components/Card/Cardjob.jsx";
import HeroJobs from "../components/Hero/Herojobs.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import Subscribe from "../components/Subscribe/Subscribe.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Offresp() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [offres, setOffres] = useState([]);
  useEffect(() => {
    const afficherOffre = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/offres/pagination?page=${currentPage}`
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
  }, [currentPage]);
  if (loading)
    return (
      <h1 className="h-screen w-screen text-4xl text-center flex items-center justify-center">
        Loading
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
      </h1>
    );
  return (
    <div>
      <HeroJobs />

      <Cardjob offres={offres} />
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />

      <Subscribe />
    </div>
  );
}
