import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function Addoffer() {
  const [formData, setFormData] = useState({
    poste: "",
    entreprise: "",
    localisation: "",
    experience: "",
    diplome: "",
    contrat: "",
    competences: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your server-side endpoint
      await axios.post("http://localhost:5000/offres/add", formData);

      // Clear the form fields after successful submission
      setFormData({
        poste: "",
        entreprise: "",
        localisation: "",
        experience: "",
        diplome: "",
        contrat: "",
        competences: "",
        description: "",
      });

      // Show a success message (you can add a state variable for this)
      alert("Offer added successfully!");
    } catch (error) {
      // Handle errors here (you can also add a state variable for error handling)
      console.log("Error:", error);
      alert("Error occurred while adding the offer. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="bg-white border-2 border-gray-200 shadow-xl pt-10 pb-14 sm:w-4/5 md:w-3/5 lg:w-3/5 rounded-lg mt-4 mb-10 grid place-items-center">
          <form className="w-4/5" onSubmit={handleSubmit}>
            <div className="text-center">
              <span className="text-4xl py-5 font-semibold sm:text-4xl bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 bg-clip-text text-transparent">
                Add an Offer
              </span>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Poste:</span>
              </label>
              <input
                type="text"
                name="poste"
                required
                placeholder=""
                className="input input-bordered w-full"
                value={formData.poste}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex gap-2 items-center">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Company:</span>
                </label>
                <input
                  type="text"
                  name="entreprise"
                  required
                  placeholder=""
                  className="input input-bordered w-full"
                  value={formData.entreprise}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Location:</span>
                </label>
                <input
                  type="text"
                  name="localisation"
                  required
                  placeholder=""
                  className="input input-bordered w-full"
                  value={formData.localisation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full flex gap-2 items-center">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Experience:</span>
                </label>
                <input
                  type="text"
                  name="experience"
                  required
                  placeholder=""
                  className="input input-bordered w-full"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Diplome:</span>
                </label>
                <input
                  type="text"
                  name="diplome"
                  required
                  placeholder=""
                  className="input input-bordered w-full"
                  value={formData.diplome}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full flex gap-2 items-center">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Contrat:</span>
                </label>
                <input
                  type="text"
                  name="contrat"
                  required
                  placeholder=""
                  className="input input-bordered w-full"
                  value={formData.contrat}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Competences:</span>
                </label>
                <input
                  type="text"
                  name="competences"
                  required
                  placeholder=""
                  className="input input-bordered w-full"
                  value={formData.competences}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                name="description"
                placeholder=""
                rows="6"
                required
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn w-full mt-14 border-none bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300"
            >
              Add Offer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addoffer;
