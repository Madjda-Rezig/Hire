import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Showrecruteur() {
  const [recruteurs, setRecruteurs] = useState([]);

  useEffect(() => {
    const fetchRecruteurs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/users/recruteurs"
        );
        setRecruteurs(response.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des recruteurs.",
          error
        );
      }
    };

    fetchRecruteurs();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="mt-14 text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-10">
          List of all Recruteurs
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
                Entreprise
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Numero
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Genre
              </td>
            </tr>
            {recruteurs.map((recruteur) => (
              <tr key={recruteur.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {recruteur.nom} {recruteur.prenom}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {recruteur.mail}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {recruteur.entreprise}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {recruteur.num_tel}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {recruteur.sexe}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
