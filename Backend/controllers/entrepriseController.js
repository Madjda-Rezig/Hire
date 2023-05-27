const EntrepriseModel = require("../models/entrepriseModel");
const expressAsyncHandler = require("express-async-handler");

// Ajouter une entreprise
exports.ajouterEntreprise = expressAsyncHandler(async (req, res) => {
  try {
    const { nomentreprise,descriptif,secteur,adresse,creation } = req.body;
    const entreprise = await EntrepriseModel.create({
      nomentreprise,
      descriptif,
      secteur,
      adresse,
      creation

    });
    
    res.status(201).json(entreprise);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Lire un article
exports.lireArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const article = await ArticleModel.findById(id).populate("auteur", "-mot_de_passe -__v");
    if (!article) {
      res.status(404);
      throw new Error("Article non trouvé");
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Lire tous les articles
exports.lireTousArticles = expressAsyncHandler(async (req, res) => {
  try {
    const articles = await ArticleModel.find({})
      .populate("auteur", "-mot_de_passe -__v")
      .sort("-createdAt");
    res.status(200).json(articles);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Mettre à jour un article
exports.modifierArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, contenu, image ,resume} = req.body;
    const article = await ArticleModel.findById(id);
    if (!article) {
      res.status(404);
      throw new Error("Article non trouvé");
    }
    if (article.auteur.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Non autorisé à modifier cet article");
    }
    article.titre = titre;
    article.contenu = contenu;
    article.image = image;
    article.resume=resume;
    const articleModifie = await article.save();
    res.status(200).json(articleModifie);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Supprimer entreprise
exports.supprimerEntreprise = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const entreprise = await EntrepriseModel.findById(id);
    if (!entreprise) {
      res.status(404);
      throw new Error("entreprise non trouvée");
    }
    if (entreprise.autheur.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Non autorisé à supprimer cet entreprise");
    }
    await entreprise.remove();
    res.status(202).json("entreprise supprimée avec succès");
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
