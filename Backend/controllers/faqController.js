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

// Endpoint pour afficher toutes les FAQ pour Candidat
exports.getAllQuestions = async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.status(200).json({ faqs });
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des questions." });
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

// Endpoint pour supprimer une question FAQ Candidat
exports.deleteQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    await Faq.findByIdAndDelete(questionId);
    res.status(200).json({ message: "Question supprimée avec succès." });
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de la suppression de la question." });
  }
};

// Endpoint pour modifier une question FAQ Candidat
exports.updateQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { question, answer } = req.body;

    const updatedFaq = await Faq.findByIdAndUpdate(
      questionId,
      { question, answer },
      { new: true }
    );

    if (!updatedFaq) {
      return res.status(404).json({ error: "Question non trouvée." });
    }

    res.status(200).json({ message: "Question modifiée avec succès.", faq: updatedFaq });
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de la modification de la question." });
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// Endpoint pour afficher toutes les questions de la FAQ Recruteur
exports.getAllQuestionsREC = async (req, res) => {
  try {
    const faqRecruteur = await FaqREC.find();
    res.status(200).json(faqRecruteur);
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des questions." });
  }
};


// Endpoint pour supprimer une question FAQ Recruteur
exports.deleteQuestionREC = async (req, res) => {
try {
const questionIdREC = req.params.id;
await FaqREC.findByIdAndDelete(questionIdREC);
res.status(200).json({ message: "Question supprimée avec succès." });
} catch (error) {
res.status(500).json({ error: "Une erreur s'est produite lors de la suppression de la question." });
}
};

// Endpoint pour modifier une question FAQ Recruteur
exports.updateQuestionREC = async (req, res) => {
try {
const questionIdREC = req.params.id;
const { question, answer } = req.body;
const updatedQuestion = await FaqREC.findByIdAndUpdate(questionIdREC, { question, answer }, { new: true });
res.status(200).json(updatedQuestion);
} catch (error) {
res.status(500).json({ error: "Une erreur s'est produite lors de la modification de la question." });
}
};