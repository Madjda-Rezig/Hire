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
  .get('/all', allUsers)
  .get('/:id', afficherUser)
  .post("/add", ajouterUtilisateur)
  .put("/modifier", protectCandidat, modifierUtilisateur)
  .delete("/supprimer/:id", protectAdmin, supprimerUtilisateur)
  .delete("/delete", protectCandidat, autoDelete);

module.exports = userRouter;
