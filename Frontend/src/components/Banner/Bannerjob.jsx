import React from "react";
import Hero from "../../assets/HeroBlog.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const Bannerjob = () => {
  return (
    <div className="hero min-h-max bg-base-200 pt-10 pb-10">
      <div className="hero-content flex-col lg:flex-row">
        <img src={Hero} className="max-w-xs rounded-lg shadow-2xl" />
        <div className="pl-8">
          <h1 className="text-4xl font-bold">Djazzy</h1>
          <p className="py-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <h3 className="text-blue-600">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-blue-600 mr-2"
            />
            adresse
          </h3>
          <h3 className="text-blue-600 mt-1">
            <FontAwesomeIcon icon={faBuilding} className="text-blue-600 mr-2" />
            secteur
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Bannerjob;
