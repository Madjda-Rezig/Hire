const articleModel = require("../models/articleModel");
const ArticleModel = require("../models/articleModel");
const expressAsyncHandler = require("express-async-handler");

// Add an article
exports.ajouterArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { titre, contenu,categorie,resume ,autheur} = req.body;
    const article = new ArticleModel({
      titre,
      contenu,
      categorie,
      resume,
      autheur,
      photo: req.myFileName,
    });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

////////////////////////////////////////////////////////////


// Show all articles

exports.lireTousArticles = expressAsyncHandler(async (req, res) => {
  try {
    const articles = await ArticleModel.find({})
      
    res.status(200).json(articles);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

 ////////////////////////////////////////////////////////////


// Show an article

exports.lireArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const article = await ArticleModel.findById(id);
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

////////////////////////////////////////////////////////////

// Update an article

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

////////////////////////////////////////////////////////////

// Delete an article

exports.supprimerArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const article = await ArticleModel.findById(id);
    if (!article) {
      res.status(404);
      throw new Error("Article non trouvé");
    }
    if (article.autheur.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Non autorisé à supprimer cet article");
    }
    await article.remove();
    res.status(202).json("Article supprimé avec succès");
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

////////////////////////////////////////////////////////////


//Pagination for article

 /* exports.paginationArticle = expressAsyncHandler(async (req, res) => {
try {
  const { page, search } = req.query;
  let pages;
    let articles;

    if (search === "") {
      pages = Math.ceil((await articleModel.countDocuments()) / 3);
      articles = await articleModel.find().skip((page - 1) * 3).limit(3);
    } else {
      const matchingArticles = await articleModel.find({
        $or: [
          { titre: { $regex: new RegExp(search.toString().toLowerCase(), "i") } },
          { categorie: { $regex: new RegExp(search.toString().toLowerCase(), "i") } }
        ]
      });

      pages = Math.ceil(matchingArticles.length / 3);
      console.log(pages)
      articles = matchingArticles;
      console.log(articles)
    }

    res.status(200).json({
      pages,
      articles
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
}); */



exports.paginationArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { page, search } = req.query;
    const perPage = 3;
    let pages;
    let articles;
    let totalCount;

    if (search === "") {
      totalCount = await articleModel.countDocuments();
      pages = Math.ceil(totalCount / perPage);
      articles = await articleModel
        .find()
        .skip((page - 1) * perPage)
        .limit(perPage);
    } else {
      const regexSearch = new RegExp(search.toString().toLowerCase(), "i");
      const query = {
        $or: [
          { titre: { $regex: regexSearch } },
          { categorie: { $regex: regexSearch } }
        ]
      };

      totalCount = await articleModel.countDocuments(query);
      pages = Math.ceil(totalCount / perPage);
      articles = await articleModel
        .find(query)
        .skip((page - 1) * perPage)
        .limit(perPage);
    }

    res.status(200).json({
      pages,
      articles,
      totalCount
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});


