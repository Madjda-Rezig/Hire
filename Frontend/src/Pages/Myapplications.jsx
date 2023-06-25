import Cardcandidature from "../components/Card/Cardjob.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Myapplications() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [candidatures, setCandidatures] = useState([]);
  const user = JSON.parse(localStorage.getItem("User"));
  useEffect(() => {
    const afficherCandidature = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/candidatures/pagination?page=${currentPage}`,
          { headers: { Authorization: `Bearer ${user.accessToken}` } }
        );
        if (response.data) {
          setPages(response.data.pages);
          setCandidatures(response.data.candidatures);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    afficherCandidature();
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
      <Cardcandidature candidatures={candidatures} />
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
}
