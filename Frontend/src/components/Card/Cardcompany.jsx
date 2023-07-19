import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cardcompany = ({ entreprises }) => {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-blue-600">
            The Company That Trust Us
          </h2>
          <p className="mt-4 text-gray-600">
            This is a list of all the companies we work with to provide you the
            best work opportunity
          </p>
        </div>

        <div className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center justify-items-center">
          {entreprises.map((entreprise) => (
            <div
              key={entreprise.id}
              className="max-w-md p-6 rounded-md shadow-xl bg-white text-black border-2 border-gray-200"
            >
              <img
                src={`http://localhost:5000/images/${entreprise.logo}`}
                alt="logo"
                className="object-cover object-center w-full rounded-md h-36 border-2 border-gray-200 "
              />
              <div className="mt-4 mb-2 text-center">
                <h2 className="text-2xl font-semibold tracki">
                  {entreprise.nomentreprise}
                </h2>
              </div>
              <h3 className="text-blue-600 mt-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-blue-600 mr-2"
                />
                {entreprise.adresse}
              </h3>
              <h3 className="text-blue-600 mt-3">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="text-blue-600 mr-2"
                />
                {entreprise.secteur}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cardcompany;
