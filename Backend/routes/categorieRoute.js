const {
    getAllCategories,
    postCategorie,
    deleteCategorie,
    updateCategorie,
  } = require("../controllers/categorieController")

  const categorieRoute = require("express").Router()
  const { protectAdmin, protectUser } = require("../middlewares/Protect")


  categorieRoute
  // Endpoint to get all categories
  .get("/all", getAllCategories)

  // Endpoint to add a new category
  .post("/add", protectAdmin, postCategorie)

  // Endpoint to delete a category by ID 
  .delete("/:id", protectAdmin, deleteCategorie)

  // Endpoint to update a category by ID 
  .put("/:id", protectAdmin, updateCategorie);

module.exports = categorieRoute;
  