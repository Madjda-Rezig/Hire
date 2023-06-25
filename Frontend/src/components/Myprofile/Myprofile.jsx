import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Myprofile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = localStorage.getItem("User");
        const { accessToken, _id } = JSON.parse(user);
        const response = await axios.get(`http://localhost:5000/users/${_id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);
  if (!profile) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const user = localStorage.getItem("User");
  const { accessToken } = JSON.parse(user);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/users/delete",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (response.data) {
        localStorage.removeItem("User");
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="hero min-h-screen bg-white">
      <div className="bg-white border-2 border-blue-600 shadow-2xl pt-10 pb-14 sm:w-4/5 md:w-3/5 lg:w-3/5 rounded-lg mt-4 mb-10 grid place-items-center ">
        <h1 className="text-center text-blue-600 text-4xl py-5 font-semibold ">
          My Profile
        </h1>
        <form className="w-4/5 ">
          <div className="w-full flex gap-2 items-center">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Nom :</span>
              </label>
              <label
                type="text"
                name="nom"
                className="input input-bordered w-full  "
              >
                {profile.nom}
              </label>
            </div>

            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">Prénom :</span>
              </label>
              <label
                type="text"
                name="prenom"
                className="input input-bordered w-full  "
              >
                {profile.prenom}
              </label>
            </div>
          </div>
          <div className="form-control w-full   ">
            <label className="label">
              <span className="label-text">Email :</span>
            </label>
            <label
              type="text"
              name="mail"
              className="input input-bordered w-full  "
            >
              {profile.mail}
            </label>
          </div>

          <div className="form-control w-full   ">
            <label className="label">
              <span className="label-text">Numéro :</span>
            </label>
            <label
              type="tel"
              name="num_tel"
              className="input input-bordered w-full  "
            >
              {profile.num_tel}
            </label>
          </div>

          <div className="form-control w-full   ">
            <label className="label">
              <span className="label-text">Date de naissance :</span>
            </label>
            <label
              type="date"
              name="date_de_naissance"
              className="input input-bordered w-full"
            >
              {formatDate(profile.date_de_naissance)}
            </label>
          </div>
          <div className="w-full flex gap-2 items-center">
            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">Mot de passe :</span>
              </label>
              <label
                type="password"
                name="mot_de_passe"
                className="input input-bordered w-full"
              >
                **************
              </label>
            </div>
            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">Confirmer mot de passe :</span>
              </label>
              <label
                type="password"
                name="confirmer_mot_de_passe"
                className="input input-bordered w-full"
              >
                **************
              </label>
            </div>
          </div>
          <div className="w-full flex gap-2 items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Genre :</span>
              </label>
              <label name="sexe" className="input input-bordered w-full  ">
                {profile.sexe}
              </label>
            </div>
            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text"></span>
              </label>
            </div>
          </div>
          <div className="w-full flex justify-center gap-2 items-center">
            <button
              type="submit"
              className="btn mt-14 border-none bg-blue-600 px-10"
            >
              Modify
            </button>
          </div>
        </form>
        <button
          className="btn  mt-14 border-none bg-blue-600 px-10"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Myprofile;
