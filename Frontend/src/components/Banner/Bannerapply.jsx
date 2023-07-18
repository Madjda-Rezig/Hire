import React, { useEffect, useState } from "react";
import Hero from "../../assets/HeroBlog.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Bannerapply = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const [entreprise, setEntreprise] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const afficherEntreprise = async (id) => {
      try {
        const response = await axios.get(
          "http://localhost:5000/candidatures/entreprise/" + id,
          { headers: { Authorization: `Bearer ${user.accessToken}` } }
        );
        setEntreprise(response.data);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    afficherEntreprise(id);
  }, []);
  console.log(entreprise);
  return (
    <div className="hero min-h-max bg-base-200 pt-10 pb-10">
      <div className="hero-content flex-col lg:flex-row">
        <img src={Hero} className="w-32 rounded-full shadow-2xl" />
        <div className="pl-8">
          <h1 className="text-4xl font-bold"></h1>
          <p className="py-5"></p>
          <h3 className="text-blue-600">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-blue-600 mr-2"
            />
          </h3>
          <h3 className="text-blue-600 mt-1">
            <FontAwesomeIcon icon={faBuilding} className="text-blue-600 mr-2" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Bannerapply;
