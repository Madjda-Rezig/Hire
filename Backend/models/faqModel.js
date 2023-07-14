const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema(
  {
    question: {
        type: String,
        required: true,
        
        
      },

    answer: {
        type: String,
        required: true,
        
        
      },
   
    date_creation: {
      type: Date,
      default: Date.now,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faq", faqSchema);


