const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        
        
      },
    mail: {
        type: String,
        required: true,
        
        
      },
    message: {
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

module.exports = mongoose.model("contactus", contactSchema);