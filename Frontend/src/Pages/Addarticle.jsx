import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddArticle = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="bg-white border-2 border-gray-200 shadow-xl pt-10 pb-14 sm:w-4/5 md:w-3/5 lg:w-3/5 rounded-lg mt-4 mb-10 grid place-items-center">
        <form className="w-4/5">
          <div className="w-full flex gap-2 items-center">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Title:</span>
              </label>
              <input
                type="text"
                name="titre"
                required
                placeholder="Article Title"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Author:</span>
              </label>
              <input
                type="text"
                name="auteur"
                required
                placeholder="Article Author"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Summary:</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              name="resume"
              placeholder="Article Summary"
              required
            ></textarea>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Content:</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              name="contenu"
              placeholder="Article Content"
              rows="6"
              required
            ></textarea>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category:</span>
            </label>
            <input
              type="text"
              name="categorie"
              placeholder="Article Category"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo:</span>
            </label>
            <input
              type="file"
              name="photo"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-full mt-14 border-none bg-blue-600"
          >
            Add Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
