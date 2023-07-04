const mongoose = require("mongoose")

const candidatureModel = new mongoose.Schema(
  {
    idOffre: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Offre",
      required: true,
    },
    idCandidat: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    Etat: {
      type: String,
      required: true,
      default: "En attente",
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("candidature", candidatureModel)
