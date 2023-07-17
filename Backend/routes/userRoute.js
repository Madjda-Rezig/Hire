const {
  ajouterUtilisateur,
  modifierUtilisateur,
  supprimerUtilisateur,
  autoDelete,
  allUsers,
  afficherUser,
  getCandidats,
  getRecruteurs
} = require("../controllers/userController");


const { protectCandidat, protectAdmin ,protectRecruteur,protectUser} = require("../middlewares/Protect");
const userRouter = require("express").Router();



userRouter
  // Endpoint to get all users
  .get('/all',protectAdmin, allUsers)

  
  // Endpoint to add a new user
  .post("/add", ajouterUtilisateur)
  
  // Endpoint to modify a user
  .put("/modifier", protectUser, modifierUtilisateur)
   
  // Endpoint to delete the authenticated user
  .delete("/delete", protectCandidat, autoDelete)

  // Route pour afficher tous les utilisateurs dont le rôle est "Candidat"
  .get('/candidats', getCandidats)

// Route pour afficher tous les utilisateurs dont le rôle est "Recruteur"
  .get('/recruteurs', getRecruteurs)

  // Endpoint to get a specific user by ID
  .get('/:id', afficherUser)

   // Endpoint to delete a user by ID 
   .delete("/supprimer/:id", protectAdmin, supprimerUtilisateur)

  

module.exports = userRouter;
