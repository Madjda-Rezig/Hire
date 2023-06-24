const {
  ajouterUtilisateur,
  modifierUtilisateur,
  supprimerUtilisateur,
  autoDelete,
  allUsers,
  afficherUser
} = require("../controllers/userController");


const { protectCandidat, protectAdmin } = require("../middlewares/Protect");
const userRouter = require("express").Router();



userRouter
  // Endpoint to get all users
  .get('/all', allUsers)

  // Endpoint to get a specific user by ID
  .get('/:id', afficherUser)

  // Endpoint to add a new user
  .post("/add", ajouterUtilisateur)

  // Endpoint to modify a user
  .put("/modifier", protectCandidat, modifierUtilisateur)

  // Endpoint to delete a user by ID 
  .delete("/supprimer/:id", protectAdmin, supprimerUtilisateur)

  // Endpoint to delete the authenticated user
  .delete("/delete", protectCandidat, autoDelete);

module.exports = userRouter;
