import React, { useEffect, useState } from "react";
import axios from "axios";

function Showoffercompany() {
  const [offers, setOffers] = useState([]);
  const id = JSON.parse(localStorage.getItem("User"))._id;
  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/offres/entreprise?id=${id}`
      );
      setOffers(response.data);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="mt-14 text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-10">
          Our Offers
        </h2>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                POSTE
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Contrat
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Location
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Experience
              </td>
            </tr>
            {offers.map((offer) => (
              <tr key={offer._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {offer.poste}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {offer.contrat}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {offer.localisation}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {offer.experience}
                </td>
                <a
                  target="_blank"
                  className="inline-block rounded bg-gradient-to-r from-[#1CD2B1] to-blue-600 px-4 py-2 text-xs font-semibold text-white"
                >
                  Delete
                </a>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Showoffercompany;
