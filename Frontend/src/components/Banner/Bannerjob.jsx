import React, { useEffect, useState } from "react";
import Hero from "../../assets/HeroBlog.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams } from "react-router-dom";

const Bannerjob = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/entreprises/company/${id}`
        );
        console.log(response.data);
        setCompany(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompany();
  }, [id]);
  if (!company) {
    return (
      <div className="text-center my-16 font-bold text-xl">Loading...</div>
    );
  }
  console.log(company);
  return (
    <div className="hero min-h-max bg-base-200 pt-10 pb-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={`http://localhost:5000/images/${company[0].logo}`}
          className="w-32 rounded-full shadow-2xl"
        />
        <div className="pl-8">
          <h1 className="text-4xl font-bold">{company[0].nomentreprise}</h1>
          <p className="py-5">{company[0].descriptif}</p>
          <h3 className="text-blue-600">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-blue-600 mr-2"
            />
            {company[0].adresse}
          </h3>
          <h3 className="text-blue-600 mt-1">
            <FontAwesomeIcon icon={faBuilding} className="text-blue-600 mr-2" />
            {company[0].secteur}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Bannerjob;
