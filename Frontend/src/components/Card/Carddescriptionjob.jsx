import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Carddescriptionjob = () => {
  const { id } = useParams();
  const [offre, setOffre] = useState(null);
  useEffect(() => {
    const fetchOffre = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/offres/${id}`);
        setOffre(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOffre();
  }, [id]);
  if (!offre) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-5">
      <div className="flex justify-center p-1">
        <div className="card w-3/4 bg-base-100 shadow-xl border-2 border-gray-100">
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl ">{offre.poste}</h2>

            <div className="card-actions justify-end">
              <button className="btn btn-primary  bg-blue-600 hover:bg-gray-600 pr-8 pl-8">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-1">
        <div className="card w-3/4 bg-base-100 shadow-xl border-2 border-gray-100">
          <div className="flex w-full">
            <div className="grid h-auto flex-grow card bg-white rounded-lg place-items-start pt-5 pb-5 pl-20">
              <p className="pb-1">
                <b> Lieu de travail :{}</b>
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
              Assure l’étude de faisabilité et étable les plans d’action de leur
              implémentation
            </p>
            <p>
              Assure l’étude de faisabilité et étable les plans d’action de leur
              implémentation
            </p>
            <p>
              Assure l’étude de faisabilité et étable les plans d’action de leur
              implémentation
            </p>
            <p>
              Assure l’étude de faisabilité et étable les plans d’action de leur
              implémentation
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

            <div className="card-actions justify-center mt-16">
              <button className="btn btn-primary  bg-blue-600 hover:bg-gray-600 pr-8 pl-8 w-1/4 text-xl">
                Apply!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carddescriptionjob;
