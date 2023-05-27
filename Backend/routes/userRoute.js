const {
  ajouterUtilisateur,
  modifierUtilisateur,
  supprimerUtilisateur,
  autoDelete,
} = require("../controllers/userController");
const { protectCandidat, protectAdmin } = require("../middlewares/Protect");
const userRouter = require("express").Router();

userRouter
  .post("/add", ajouterUtilisateur)
  .put("/modifier", protectCandidat, modifierUtilisateur)
  .delete("/supprimer/:id", protectAdmin, supprimerUtilisateur)
  .delete("/delete", protectCandidat, autoDelete);

module.exports = userRouter;
