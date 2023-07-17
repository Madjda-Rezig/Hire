import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Addcategorie() {
  const [nom, setNom] = useState("");
  const [defcat, setDefcat] = useState("");
  const user = JSON.parse(localStorage.getItem("User"));

  const handleInputChange = (e) => {
    if (e.target.name === "nom") {
      setNom(e.target.value);
    } else if (e.target.name === "defcat") {
      setDefcat(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/categories/add",
        {
          nom: nom,
          defcat: defcat,
        },
        { headers: { Authorization: `Bearer ${user.accessToken}` } }
      );

      console.log(response.data);

      setNom("");
      setDefcat("");

      toast.success("Category created successfully");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-1/2 mx-auto">
      <form
        className="my-40 space-y-5 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border-2"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <span className=" text-4xl py-5 font-semibold sm:text-4xl bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 bg-clip-text text-transparent">
            Add a Category
          </span>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Category Name:</span>
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              name="nom"
              value={nom}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <label className="label">
              <span className="label-text">Description:</span>
            </label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              name="defcat"
              value={defcat}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full rounded-lg  px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}
