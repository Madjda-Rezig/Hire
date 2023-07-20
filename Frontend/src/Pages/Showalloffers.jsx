import React, { useState, useEffect } from "react";
import axios from "axios";

function Showalloffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Function to fetch offers data from your API
    const fetchOffers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/offres/all"); // Update the URL with the correct endpoint to your backend API
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="mt-14 text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-10">
          List of all Offers
        </h2>

        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Poste
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Contract
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Entreprise
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Location
              </td>
            </tr>
            {offers.map((offer) => (
              <tr key={offer._id}>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {offer.poste}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {offer.contrat}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {offer.entreprise}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {offer.localisation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Showalloffers;
