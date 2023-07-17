import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Showcompanies() {
  const [entreprises, setEntreprises] = useState([]);

  useEffect(() => {
    const fetchEntreprises = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/entreprises/all"
        );
        setEntreprises(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntreprises();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="mt-14 text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-10">
          List of all the Companies
        </h2>
        <table className="table w-full">
          <tbody>
            {entreprises.map((entreprise) => (
              <tr key={entreprise._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          alt="Avatar Tailwind CSS Component"
                          src={`http://localhost:5000/images/${entreprise.logo}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {entreprise.nomentreprise}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{entreprise.secteur}</td>
                <td>{entreprise.adresse}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
