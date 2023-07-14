const Faq = require("../models/faq");

// Endpoint pour ajouter une question et sa réponse
exports.addQuestion = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new Faq({ question, answer });
    await faq.save();
    res.status(200).json({ message: "Question ajoutée avec succès." });
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de l'ajout de la question." });
  }
};

// Endpoint pour afficher trois questions et réponses de manière aléatoire
exports.getRandomQuestions = async (req, res) => {
  try {
    const faqs = await Faq.aggregate([{ $sample: { size: 3 } }]);
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des questions." });
  }
};
