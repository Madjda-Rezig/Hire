import React, { useState } from "react";

export default function AddCompany() {
  const [entrepriseData, setEntrepriseData] = useState({
    nomentreprise: "",
    descriptif: "",
    secteur: "",
    adresse: "",
    creation: "",
    logo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntrepriseData({ ...entrepriseData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEntrepriseData({ ...entrepriseData, logo: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("nomentreprise", entrepriseData.nomentreprise);
    formData.append("descriptif", entrepriseData.descriptif);
    formData.append("secteur", entrepriseData.secteur);
    formData.append("adresse", entrepriseData.adresse);
    formData.append("creation", entrepriseData.creation);
    formData.append("logo", entrepriseData.logo);

    // Effectuer une requête POST vers l'endpoint "ajouterEntreprise" avec les données du formulaire
    fetch("http://localhost:5000/entreprises/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Gérer la réponse de la requête
        console.log(data); // Vous pouvez afficher la réponse ou effectuer d'autres actions
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="bg-white border-2 border-gray-200 shadow-xl pt-10 pb-14 sm:w-4/5 md:w-3/5 lg:w-3/5 rounded-lg mt-4 mb-10 grid place-items-center">
          <form className="w-4/5" onSubmit={handleSubmit}>
            <div className="w-full flex gap-2 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Company Name:</span>
                </label>
                <input
                  type="text"
                  name="nomentreprise"
                  required
                  placeholder="Company Name"
                  className="input input-bordered w-full"
                  value={entrepriseData.nomentreprise}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                name="descriptif"
                placeholder="Company Description"
                required
                value={entrepriseData.descriptif}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Sector:</span>
              </label>
              <input
                type="text"
                name="secteur"
                placeholder="Company Sector"
                className="input input-bordered w-full"
                required
                value={entrepriseData.secteur}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Address:</span>
              </label>
              <input
                type="text"
                name="adresse"
                placeholder="Company Address"
                className="input input-bordered w-full"
                required
                value={entrepriseData.adresse}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Creation:</span>
              </label>
              <input
                type="date"
                name="creation"
                placeholder="Company Creation"
                className="input input-bordered w-full"
                required
                value={entrepriseData.creation}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Logo:</span>
              </label>
              <input
                type="file"
                name="logo"
                className="input input-bordered w-full"
                required
                onChange={handleFileChange}
              />
            </div>

            <button
              type="submit"
              className="btn w-full mt-14 border-none bg-blue-600"
            >
              Add Company
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
