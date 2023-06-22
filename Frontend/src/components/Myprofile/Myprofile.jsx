import React from "react";
import Logo from "../../assets/Logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

const Myprofile = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="bg-white border-2 border-gray-200 shadow-xl pt-10 pb-14 sm:w-4/5 md:w-3/5 lg:w-3/5 rounded-lg mt-4 mb-10 grid place-items-center ">
        <img src={Logo} />
        <form className="w-4/5 ">
          <div className="w-full flex gap-2 items-center">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Nom :</span>
              </label>
              <label
                type="text"
                name="nom"
                required
                placeholder="Votre Nom"
                className="input input-bordered w-full  "
              ></label>
            </div>

            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">Prénom :</span>
              </label>
              <label
                type="text"
                name="prenom"
                required
                placeholder="Votre Prénom"
                className="input input-bordered w-full  "
              ></label>
            </div>
          </div>
          <div className="form-control w-full   ">
            <label className="label">
              <span className="label-text">Email :</span>
            </label>
            <label
              type="text"
              name="mail"
              required
              placeholder="Votre Email"
              className="input input-bordered w-full  "
            ></label>
          </div>

          <div className="form-control w-full   ">
            <label className="label">
              <span className="label-text">Numéro :</span>
            </label>
            <label
              type="tel"
              name="num_tel"
              placeholder="Votre Numéro"
              required
              className="input input-bordered w-full  "
            ></label>
          </div>

          <div className="form-control w-full   ">
            <label className="label">
              <span className="label-text">Date de naissance :</span>
            </label>
            <label
              type="date"
              name="date_de_naissance"
              placeholder="Exemple:1998-09-08"
              className="input input-bordered w-full"
              required
            ></label>
          </div>
          <div className="w-full flex gap-2 items-center">
            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">Mot de passe :</span>
              </label>
              <label
                type="password"
                name="mot_de_passe"
                placeholder="Votre mot de passe"
                className="input input-bordered w-full"
                required
              ></label>
            </div>
            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">Confirmer mot de passe :</span>
              </label>
              <label
                type="password"
                name="confirmer_mot_de_passe"
                placeholder="Confirmer  mot de passe"
                className="input input-bordered w-full"
                required
              ></label>
            </div>
          </div>
          <div className="w-full flex gap-2 items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Genre :</span>
              </label>
              <label
                name="sexe"
                required
                className="input input-bordered w-full  "
                defaultValue={""}
              ></label>
            </div>
            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text">CV :</span>
              </label>
              <input type="file" name="cv" />
            </div>
          </div>
          <div className="w-full flex justify-center gap-2 items-center">
            <button
              type="submit"
              className="btn mt-14 border-none bg-blue-600 px-10"
            >
              Modify
            </button>
            <button
              type="submit"
              className="btn  mt-14 border-none bg-blue-600 px-10"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Myprofile;
