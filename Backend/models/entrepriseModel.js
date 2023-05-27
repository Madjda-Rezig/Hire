const mongoose = require("mongoose")

const entrepriseModel = new mongoose.Schema({
  autheur: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Recruteur",
    required: true,
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
}, {timestamps: true})

module.exports = mongoose.model("Entreprise", entrepriseModel)
