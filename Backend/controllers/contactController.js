const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../models/contactModel");

const Contact = require("../models/contactModel");

// Endpoint pour permettre aux utilisateurs de contacter l'admin en laissant un message, leur nom et leur email
exports.sendMessage = async (req, res) => {
  try {
    const { name, mail, message } = req.body;

    // Créer une nouvelle instance de Contact avec les données fournies
    const newMessage = new Contact({
      name,
      mail,
      message,
    });

    // Sauvegarder le message dans la base de données
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

// Endpoint pour afficher tous les messages avec le nom et l'email des expéditeurs du message,
// du plus ancien au plus récent
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await contactModel.find().sort({ date_creation: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
};


// Endpoint pour supprimer un message en utilisant son ID
exports.deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.id;

    // Supprimer le message de la base de données en utilisant l'ID fourni
    await contactModel.findByIdAndDelete(messageId);

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete message" });
  }
};
