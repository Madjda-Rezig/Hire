import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Profilerec() {
  const [profile, setProfile] = useState(null);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [numTel, setNumTel] = useState("");
  const [dateDeNaissance, setDateDeNaissance] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

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
        setNom(response.data.nom);
        setPrenom(response.data.prenom);
        setMail(response.data.mail);
        setNumTel(response.data.num_tel);
        setDateDeNaissance(response.data.date_de_naissance);
        setMotDePasse(response.data.mot_de_passe);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const user = localStorage.getItem("User");
  const { accessToken } = JSON.parse(user);

  const handleModify = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5000/users/modifier",
        {
          nom,
          prenom,
          mail,
          num_tel: numTel,
          date_de_naissance: dateDeNaissance,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      // Traitez la réponse de l'API en conséquence
      console.log(response.data);
      // Affichez une notification de succès
      toast.success("Modifications enregistrées avec succès !");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

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

  if (!profile) {
    return (
      <h1 className="h-screen w-screen text-4xl text-center flex items-center justify-center">
        Loading
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
      </h1>
    );
  }
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="bg-white border-2  shadow-2xl pt-1 pb-5 sm:w-4/5 md:w-3/5 lg:w-3/5 rounded-lg mt-1 mb-10 grid place-items-center ">
          <span className="text-4xl py-5 font-semibold sm:text-4xl bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 bg-clip-text text-transparent ">
            My Profil
          </span>
          <form className="w-4/5">
            <div className="w-full flex gap-2 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Nom :</span>
                </label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Prénom :</span>
                </label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email :</span>
              </label>
              <input
                type="text"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Numéro :</span>
              </label>
              <input
                type="tel"
                value={numTel}
                onChange={(e) => setNumTel(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date de naissance :</span>
              </label>
              <input
                type="date"
                value={dateDeNaissance ? dateDeNaissance.slice(0, 10) : ""}
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full flex gap-2 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Mot de passe :</span>
                </label>
                <input
                  type="password"
                  name="mot_de_passe"
                  value={motDePasse ? "************" : ""}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Genre :</span>
                </label>
                <input
                  type="text"
                  name="sexe"
                  value={profile.sexe}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
            </div>
          </form>

          <div className="w-full flex gap-2 items-center">
            <div className="w-full flex justify-center gap-2 items-center">
              <button
                type="submit"
                className="btn mt-14 border-none bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300 px-10"
                onClick={handleModify}
              >
                Modifier
              </button>
            </div>
            <div className="w-full flex justify-center gap-2 items-center">
              <button
                className="btn mt-14 border-none bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300 px-10"
                onClick={handleDelete}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
