import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cardapplydescription = () => {
  const { id } = useParams();
  const [candidature, setCandidature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidature = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/Candidatures/candidat/${id}`
        );
        setCandidature(response.data);
      } catch (error) {
        toast.error("Une erreur s'est produite lors du chargement de l'offre.");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidature();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-5">
      <div className="flex justify-center p-1">
        <div className="card w-3/4 bg-base-100 shadow-xl border-2 border-gray-100">
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl ">
              {candidature.idOffre.poste}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-1">
        <div className="card w-3/4 bg-base-100 shadow-xl border-2 border-gray-100">
          <div className="flex w-full">
            <div className="grid h-auto flex-grow card bg-white rounded-lg place-items-start pt-5 pb-5 pl-20">
              <p className="pb-1">
                <b> Lieu de travail :</b>
              </p>
              <p className="pb-1">
                <b>Date d'expiration :</b>
              </p>
              <p className="pb-1">
                <b>Niveau du poste :</b>
              </p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-auto flex-grow card bg-white rounded-lg place-items-start pt-5 pb-5 pl-20">
              <p className="pb-1">
                <b>Secteur d'activité : </b>
              </p>
              <p className="pb-1">
                <b>Niveau d'étude :</b>
              </p>
              <p className="pb-1">
                <b>Type de contrat :</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-1">
        <div className="card w-3/4 bg-base-100 shadow-xl border-2 border-gray-100">
          <div className="card-body">
            <h2 className="card-title font-bold text-xl mt-1">
              Définition du poste :
            </h2>
            <p>
              IT Content & Integration Dev Administrator : assure le
              développement back-end du contenu Mobile APP, du MFS ,
              l’intégration des fournisseurs de contenu et marketplace ainsi que
              la digitalisation des processus de l’entreprise tout en respectant
              les procédures SoX
            </p>
            <h2 className=" font-bold text-xl mt-4">Taches Principales :</h2>
            <p>
              Front-End Development: Design and implement highly interactive and
              user-friendly UIs using Front-End languages and technologies such
              as HTML, CSS, JavaScript (and frameworks like React, Angular,
              Vue.js, etc.).
            </p>
            <p>
              Assure l’étude de faisabilité et étable les plans d’action de leur
              implémentation
            </p>
            <p>
              Collaboration: Work closely with UX/UI design and Back-End
              development teams to translate mockups and functional
              specifications into well-integrated Front-End features.
            </p>
            <p>
              Performance Optimization: Ensure high performance and a smooth
              user experience by optimizing page rendering, cache management,
              responsiveness, and cross-browser compatibility.
            </p>
            <p>
              Assure l’étude de faisabilité et étable les plans d’action de leur
              implémentation
            </p>
            <p>
              Assure l’étude de faisabilité et étable les plans d’action de leur
              implémentation
            </p>
            <h2 className=" font-bold text-xl mt-4 ">
              Diplômes & Formations :
            </h2>
            <p>Diplôme d’ingénieur d’état en informatique.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardapplydescription;
