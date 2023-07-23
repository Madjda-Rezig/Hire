import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Showcandidat() {
  const [candidats, setCandidats] = useState([]);

  useEffect(() => {
    const fetchCandidats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/users/candidats"
        );
        setCandidats(response.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des candidats.",
          error
        );
      }
    };

    fetchCandidats();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="mt-14 text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-10">
          List of all Candidats
        </h2>

        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Nom
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Mail
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Date de naissance
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Numero
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Genre
              </td>
            </tr>
            {candidats.map((candidat) => (
              <tr key={candidat.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {candidat.nom} {candidat.prenom}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {candidat.mail}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {new Date(candidat.date_de_naissance).toLocaleDateString(
                    "fr-FR"
                  )}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {candidat.num_tel}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {candidat.sexe}
                </td>

                <a
                  href={"http://localhost:5000/fichiercv/" + candidat.cv}
                  target="_blank"
                  className="inline-block rounded bg-gradient-to-r from-[#1CD2B1] to-blue-600 px-4 py-2 text-xs font-semibold text-white"
                >
                  Resume
                </a>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
