import React, { useEffect, useState } from "react";
import axios from "axios";

function Showcandidature() {
  const [candidatures, setCandidatures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/candidatures/detailcandidature")
      .then((response) => {
        setCandidatures(response.data);
      })
      .catch((error) => {
        console.error("Error fetching candidatures:", error);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="mt-14 text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-10">
          All Candidatures
        </h2>

        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Poste
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Nom</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Mail
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Numéro
              </td>
            </tr>
            {candidatures.map((candidature) => (
              <tr key={candidature._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {candidature.idOffre?.poste}{" "}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {candidature.idCandidat?.nom} {candidature.idCandidat?.prenom}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {candidature.idCandidat?.mail}{" "}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {candidature.idCandidat?.num_tel}{" "}
                </td>
                <a
                  href={
                    "http://localhost:5000/fichiercv/" +
                    candidature.idCandidat?.cv
                  }
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

export default Showcandidature;
