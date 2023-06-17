const Entreprise = require("../models/entrepriseModel");

// Ajouter une entreprise
exports.ajouterEntreprise = async (req, res) => {
  try {
    const { auteur, nomentreprise, descriptif, secteur, adresse, creation, logo } = req.body;
    const nouvelleEntreprise = new Entreprise({
      auteur,
      nomentreprise,
      descriptif,
      secteur,
      adresse,
      creation,
      logo
    });
    await nouvelleEntreprise.save();
    res.status(201).json(nouvelleEntreprise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Afficher la totalité des entreprises
exports.afficherToutesEntreprises = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
    };
    const entreprises = await Entreprise.paginate({}, options);
    res.json(entreprises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Afficher une entreprise spécifique
exports.afficherEntreprise = async (req, res) => {
  try {
    const entreprise = await Entreprise.findById(req.params.id);
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
    const entreprise = await Entreprise.findByIdAndUpdate(
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
    const entreprise = await Entreprise.findByIdAndRemove(req.params.id);
    if (!entreprise) {
      return res.status(404).json({ message: "Entreprise introuvable" });
    }
    res.json({ message: "Entreprise supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
