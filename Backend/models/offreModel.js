const mongoose = require("mongoose")

const offerModel = new mongoose.Schema({
  autheur: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Recruteur",
    required: true,
  },
  IdCategorie: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Categorie",
    required: true,
  },
  poste: {
    type: String,
    required: true,
  },
  localisation: {
    type: String,
    required: true,
  },
  entreprise: {
    type: String,
    required: true,
  },
  contrat: {
    type: String,
    required: true,
  },
  competences: {
    type: [String],
    required: true,
  },
  diplome: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {timestamps: true})

module.exports = mongoose.model("Offre", offerModel)
