import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cardcandidature = ({ candidatures }) => {
  console.log(candidatures);
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-blue-600">
            My Applications
          </h2>
        </div>

        <div className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center justify-items-center">
          {candidatures.map((candidature) => (
            <div
              key={candidature._id}
              className="card w-60 bg-base-100 shadow-xl border-2 border-blue-600"
            >
              <div className="card-body items-start text-start">
                {/* Afficher les détails de l'offre d'emploi en utilisant les données du 'job' */}
                <span className="whitespace-nowrap rounded-full px-4 py-0.5 text-sm font-bold text-blue-600 bg-[#0057FF] bg-opacity-30">
                  {candidature.idOffre.contrat}
                </span>
                <h2 className="card-title text-gray-800">
                  {candidature.poste}
                </h2>
                <p className="text-sm">{candidature.idOffre.description}</p>
                <h3 className="text-blue-600 mt-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-blue-600 mr-2"
                  />
                  {candidature.idOffre.localisation}
                </h3>
                <h3 className="text-blue-600 ">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="text-blue-600 mr-2"
                  />
                  {candidature.idOffre.entreprise}
                </h3>
              </div>
              <Link
                to={`/Candidaturedescription/${candidature._id}`}
                type="button"
                className="link link-hover text-blue-600 text-center mb-4"
              >
                - More Details -
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cardcandidature;
