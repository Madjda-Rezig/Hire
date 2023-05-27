const {getAllcandidatures, postCandidature, modifierCandidature} = require("../controllers/candidatureController")
const {protectRecruteur,protectCandidat} = require('../middlewares/Protect')
const candidatureRoute = require("express").Router()


candidatureRoute
.get("/all",protectRecruteur, getAllcandidatures)
.post("/add/:idOffre",protectCandidat, postCandidature)
.put('/:id',protectCandidat,modifierCandidature)


module.exports = candidatureRoute