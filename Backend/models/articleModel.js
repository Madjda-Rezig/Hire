const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    autheur: {
      type: String,
      
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    contenu: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
    },
   
    date_creation: {
      type: Date,
      default: Date.now,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("articles", ArticleSchema);
