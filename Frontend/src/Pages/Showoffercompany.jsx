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
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <tbody className="divide-y divide-gray-200">
            {offers.map((offer) => (
              <tr key={offer._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {offer.poste}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {offer.contract}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {offer.location}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {offer.experience}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Showoffercompany;
