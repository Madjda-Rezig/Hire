

const {afficherToutesEntreprises,afficherEntreprise,ajouterEntreprise,supprimerEntreprise,modifierEntreprise } = require("../controllers/entrepriseController")

const  {protectRecruteur, protectCandidat,protectUser} = require('../middlewares/Protect')

const entrepriseRouter = require("express").Router()

entrepriseRouter

.get("/all",afficherToutesEntreprises)
.get("/:id",afficherEntreprise)
.post("/add", protectRecruteur, ajouterEntreprise)
.delete("/:id", protectRecruteur, supprimerEntreprise)
.put("/:id", protectRecruteur, modifierEntreprise)

module.exports = entrepriseRouter;
