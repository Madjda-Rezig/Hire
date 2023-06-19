const entrepriseModel = require("../models/entrepriseModel");
const expressAsyncHandler = require("express-async-handler")
// Ajouter une entreprise
exports.ajouterEntreprise = async (req, res) => {
  try {
    const { auteur, nomentreprise, descriptif, secteur, adresse, creation } = req.body;
    
    const nouvelleEntreprise = new entrepriseModel({
      auteur,
      nomentreprise,
      descriptif,
      secteur,
      adresse,
      creation,
      logo: req.myFileName
    });
    await nouvelleEntreprise.save();
    res.status(201).json(nouvelleEntreprise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Afficher toutes les entreprises
exports.afficherEntreprises = async (req, res) => {
  try {
    const entreprises = await entrepriseModel.find();
    res.status(200).json(entreprises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Afficher une entreprise spécifique
exports.afficherEntreprise = async (req, res) => {
  try {
    const entreprise = await entrepriseModel.findById(req.params.id);
    if (!entreprise) {
      return res.status(404).json({ message: "Entreprise introuvable" });
    }
    res.json(entreprise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modifier une entreprise
exports.modifierEntreprise = async (req, res) => {
  try {
    const entreprise = await entrepriseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!entreprise) {
      return res.status(404).json({ message: "Entreprise introuvable" });
    }
    res.json(entreprise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une entreprise
exports.supprimerEntreprise = async (req, res) => {
  try {
    const entreprise = await entrepriseModel.findByIdAndRemove(req.params.id);
    if (!entreprise) {
      return res.status(404).json({ message: "Entreprise introuvable" });
    }
    res.json({ message: "Entreprise supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Pagination offres
exports.paginationEntreprises = expressAsyncHandler(async (req, res) => {
  try {
    const { page } = req.query;
    const pages = Math.ceil((await entrepriseModel.countDocuments())/12)
    const skipPage = (page - 1) * 12;
    const entreprises = await entrepriseModel.find().skip(skipPage).limit(12);
    res.status(200).json({
      pages,
      entreprises
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});