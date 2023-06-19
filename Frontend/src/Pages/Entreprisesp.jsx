import Pagination from "../components/Pagination/Pagination.jsx";
import HeroCompany from "../components/Hero/Herocompany.jsx";
import CardCompany from "../components/Card/Cardcompany.jsx";
import Parteners from "../components/Parteners/Parteners.jsx";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Entreprisesp() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [entreprises, setEntreprises] = useState([]);
  useEffect(() => {
    const afficherEntreprises = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/entreprises/pagination?page=${currentPage}`
        );
        if (response.data) {
          setPages(response.data.pages);
          setEntreprises(response.data.entreprises);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    afficherEntreprises();
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
      <HeroCompany />

      <CardCompany entreprises={entreprises} />
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />

      <div>
        <h1 className="text-blue-600 text-3xl  text-center font-bold bg-blue-100 mb-7 pt-5 pb-5 mt-7">
          Our Parteners
        </h1>
      </div>
    </div>
  );
}
