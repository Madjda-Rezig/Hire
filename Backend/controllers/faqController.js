const Faq = require("../models/faqModel");
const FaqREC = require("../models/faqrecModel");

// Endpoint pour ajouter une FAQ pour Candidat
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

// Endpoint pour afficher FAQ Aléatoire Candidat
exports.getRandomQuestions = async (req, res) => {
  try {
    const faqs = await Faq.aggregate([{ $sample: { size: 3 } }]);
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des questions." });
  }
};



// Endpoint pour ajouter FAQ Recruteur

exports.addQuestionREC = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faqREC = new FaqREC({ question, answer });
    await faqREC.save();
    res.status(200).json({ message: "Question ajoutée avec succès." });
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de l'ajout de la question." });
  }
};

// Endpoint pour afficher FAQ Aléatoire Recruteur
exports.getRandomQuestionsREC = async (req, res) => {
  try {
    const faqRecruteur = await FaqREC.aggregate([{ $sample: { size: 3 } }]);
    res.status(200).json(faqRecruteur);
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des questions." });
  }
};
