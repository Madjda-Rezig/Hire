const mongoose = require("mongoose")

const mongoosePaginate = require("mongoose-paginate-v2");

const entrepriseModel = new mongoose.Schema({
  auteur: {
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
  logo: {
    type: String, 
    required: true,
  },
}, { timestamps: true })
entrepriseModel.plugin(mongoosePaginate);

module.exports = mongoose.model("Entreprise", entrepriseModel)

