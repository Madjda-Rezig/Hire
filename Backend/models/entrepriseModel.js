const mongoose = require("mongoose")


const entrepriseModel = new mongoose.Schema({
  auteur: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Recruteur",
    required: false,
  },
  nomentreprise: {
    type: String,
    required: true,
  },
  descriptif: {
    type: String,
    required: true,
  },
  secteur: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  creation: {
    type: String,
    required: true,
  },
  logo: {
    type: String, 
    required: true,
  },
}, { timestamps: true })

module.exports = mongoose.model("Entreprise", entrepriseModel)

