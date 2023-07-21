import React from "react";

function Showcandidature() {
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
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Junior FrontEnd Developper
              </td>

              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Rezig Madjda
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                rezigmadjda@gmail.fr
              </td>

              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                0551862635
              </td>
              <th>
                <button className="btn btn-ghost btn-sm bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white">
                  Resume
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Showcandidature;
