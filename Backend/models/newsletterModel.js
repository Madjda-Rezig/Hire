const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema(
  {
    mail: {
        type: String,
        required: true,
        unique: true, // je m' Assure que chaque adresse e-mail est unique
        match: /^\S+@\S+\.\S+$/, 
      },
   
    date_creation: {
      type: Date,
      default: Date.now,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("news", newsletterSchema);
