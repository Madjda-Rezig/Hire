const offreModel = require("../models/offreModel")
const userModel = require("../models/userModel")
const candidatureModel = require("../models/candidatureModel");
const expressAsyncHandler = require("express-async-handler")


//Show all offers

exports.getAllOffres = expressAsyncHandler(async (req, res) => {
  try {
    const offres = await offreModel.find({})
    res.status(200).json(offres)
  } catch (error) {
    res.status(400)
    console.error(error)
  }
})

//////////////////////////////////////////////

// Show an offer
exports.afficherOffre = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const offre = await offreModel.findById(id);
    if (!offre) {
      res.status(404);
      throw new Error("Offre non trouvé");
    }
    res.status(200).json(offre);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});


//////////////////////////////////////////////

// View jobs the candidate has applied to

exports.getAppliedOffres = expressAsyncHandler(async (req, res) => {
  try {
    const candidatId = req.params.candidatId;
    const candidatures = await candidatureModel.find({ candidatId: candidatId }).populate("offreId");
    const offres = candidatures.map((candidature) => candidature.offreId);
    res.status(200).json(offres);
  } catch (error) {
    res.status(400).json(error);
  }
});


//////////////////////////////////////////////

// Show companies offers 

exports.getEntrepriseOffres = expressAsyncHandler(async (req, res) => {
  try {
    const entreprise = req.params.entreprise.toString().toLowerCase();
    const users = await userModel.find({ entreprise });
    const offres = await offreModel.find({ autheur: { $in: users.map((user) => user._id) } });
    res.status(200).json(offres);
  } catch (error) {
    res.status(400).json(error);
  }
});


//////////////////////////////////////////////


//Create an offer

exports.postOffer = expressAsyncHandler(async (req, res) => {
  try {
    const {  contrat, competences, diplome, experience, description,poste,localisation,entreprise } =
      req.body
    if (
      !contrat ||
      !competences ||
      !diplome ||
      !experience ||
      !poste ||
      !localisation ||
      !entreprise ||
      !description
    ) {
      res.status(400).json("Fichier Vide !!")
    }

    await offreModel.create({
      autheur: req.user._id,
      contrat,
      IdCategorie: req.user._id,
      competences,
      diplome,
      experience,
      description,
      poste,
      localisation,
      entreprise,
    })
    res.status(201).json("l'offre a été crée !")
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})


//////////////////////////////////////////////

// Update an offer
exports.updateOffer = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    const { autheur, contact, competences, diplome, experience, description,poste,localisation ,entreprise} =
      req.body
    const updatedOffer = {
      autheur,
      contact,
      competences,
      diplome,
      experience,
      description,
      poste,
      localisation,
      entreprise,
    }

    const result = await offreModel.findByIdAndUpdate(id, req.body)
    if (!result) {
      return res.status(404).json({ message: "L'offre n'a pas été trouvée." })
    }
    res
      .status(200)
      .json({ message: "L'offre a été modifiée avec succès.", offer: result })
  } catch (error) {
    res
      .status(400)
      .json({ message: "La modification de l'offre a échoué.", error: error })
  }
})


//////////////////////////////////////////////

// Delete an offer :
exports.deleteOffre = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    await offreModel.findByIdAndDelete(id)
    res.status(201).json("Vous avez supprimé cette offre ")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})


//////////////////////////////////////////////

//Pagination for offers
exports.paginationOffres = expressAsyncHandler(async (req, res) => {
  try {
    const { page } = req.query;
    const pages = Math.ceil((await offreModel.countDocuments())/12)
    const skipPage = (page - 1) * 12;
    const offres = await offreModel.find().skip(skipPage).limit(12);
    res.status(200).json({
      pages,
      offres
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
