import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddArticle = () => {
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState({
    titre: "",
    auteur: "",
    resume: "",
    contenu: "",
    categorie: "",
    photo: null,
  });

  const handleInputChange = (event) => {
    if (event.target.name === "photo") {
      setArticleData({
        ...articleData,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setArticleData({
        ...articleData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("titre", articleData.titre);
      formData.append("auteur", articleData.auteur);
      formData.append("resume", articleData.resume);
      formData.append("contenu", articleData.contenu);
      formData.append("categorie", articleData.categorie);
      formData.append("photo", articleData.photo);

      await axios.post("http://localhost:5000/articles/", formData);

      toast.success("Article added successfully");
    } catch (error) {
      toast.error("Failed to add article");
      console.error(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="bg-white border-2 border-gray-200 shadow-xl pt-10 pb-14 sm:w-4/5 md:w-3/5 lg:w-3/5 rounded-lg mt-4 mb-10 grid place-items-center">
        <form className="w-4/5" onSubmit={handleSubmit}>
          <div className="w-full flex gap-2 items-center">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Title:</span>
              </label>
              <input
                type="text"
                name="titre"
                value={articleData.titre}
                onChange={handleInputChange}
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
                value={articleData.auteur}
                onChange={handleInputChange}
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
              value={articleData.resume}
              onChange={handleInputChange}
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
              value={articleData.contenu}
              onChange={handleInputChange}
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
              value={articleData.categorie}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
