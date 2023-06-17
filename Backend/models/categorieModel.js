const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
  nomcategorie: {
    type: String,
    required: true,
  },
  defcat: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("categories", categorieSchema); 





