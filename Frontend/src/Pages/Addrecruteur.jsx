import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import image from "../Assets/Register.jpg";
import Logo from "../assets/Logo.svg";

export default function Addrecruteur() {
  const navigate = useNavigate();

  const [RegisterInput, setRegisterInput] = useState({
    nom: "",
    prenom: "",
    mail: "",
    date_de_naissance: "",
    sexe: "",
    mot_de_passe: "",
    confirmer_mot_de_passe: "",
    num_tel: "",
    entreprise: "",
    role: "",
  });
  console.log(RegisterInput);
  const handleOnChange = (e) => {
    setRegisterInput((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { confirmer_mot_de_passe, ...data } = RegisterInput;
      const response = await axios.post(
        "http://localhost:5000/users/add",
        data
      );
      if (response.data) {
        toast.success("Création du compte recruteur réussie !");
        window.location.reload(); // Actualiser la page
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="bg-white border-2 border-gray-200 shadow-xl pt-10 pb-14 sm:w-4/5 md:w-3/5 lg:w-3/5 rounded-lg mt-4 mb-10 grid place-items-center ">
          <form onSubmit={handleOnSubmit} className="w-4/5 ">
            <h2 className="mt-2 text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-5">
              Register
            </h2>
            <div className="w-full flex gap-2 items-center">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Nom :</span>
                </label>
                <input
                  type="text"
                  value={RegisterInput.nom}
                  name="nom"
                  required
                  placeholder="Votre Nom"
                  className="input input-bordered w-full  "
                  onChange={handleOnChange}
                />
              </div>

              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text">Prénom :</span>
                </label>
                <input
                  type="text"
                  name="prenom"
                  required
                  placeholder="Votre Prénom"
                  value={RegisterInput.prenom}
                  onChange={handleOnChange}
                  className="input input-bordered w-full  "
                />
              </div>
            </div>
            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">Email :</span>
              </label>
              <input
                type="text"
                value={RegisterInput.mail}
                name="mail"
                required
                placeholder="Votre Email"
                onChange={handleOnChange}
                className="input input-bordered w-full  "
              />
            </div>
            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">Entreprise :</span>
              </label>
              <input
                type="text"
                value={RegisterInput.entreprise}
                name="entreprise"
                required
                placeholder="Votre Entreprise"
                onChange={handleOnChange}
                className="input input-bordered w-full  "
              />
            </div>

            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">Numéro :</span>
              </label>
              <input
                type="tel"
                name="num_tel"
                placeholder="Votre Numéro"
                required
                className="input input-bordered w-full  "
                value={RegisterInput.num_tel}
                onChange={handleOnChange}
              />
            </div>

            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">Date de naissance :</span>
              </label>
              <input
                type="date"
                name="date_de_naissance"
                placeholder="Exemple:1998-09-08"
                className="input input-bordered w-full"
                required
                value={RegisterInput.date_de_naissance}
                onChange={handleOnChange}
              />
            </div>
            <div className="w-full flex gap-2 items-center">
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text">Mot de passe :</span>
                </label>
                <input
                  type="password"
                  name="mot_de_passe"
                  placeholder="Votre mot de passe"
                  className="input input-bordered w-full"
                  required
                  value={RegisterInput.mot_de_passe}
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text">Confirmer mot de passe :</span>
                </label>
                <input
                  type="password"
                  name="confirmer_mot_de_passe"
                  placeholder="Confirmer  mot de passe"
                  className="input input-bordered w-full"
                  required
                  value={RegisterInput.confirmer_mot_de_passe}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="w-full flex gap-2 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Genre :</span>
                </label>
                <select
                  value={RegisterInput.sexe}
                  name="sexe"
                  onChange={handleOnChange}
                  required
                  className="input input-bordered w-full  "
                  defaultValue={""}
                >
                  <option disabled value={""} hidden>
                    Sexe
                  </option>
                  <option>Femme</option>
                  <option>Homme</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Role :</span>
                </label>
                <select
                  value={RegisterInput.role}
                  name="role"
                  onChange={handleOnChange}
                  required
                  className="input input-bordered w-full  "
                  defaultValue={""}
                >
                  <option disabled value={""} hidden></option>
                  <option>Recruteur</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="btn w-full mt-14 border-none bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300"
            >
              Inscription
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
