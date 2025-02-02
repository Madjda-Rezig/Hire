const {
    getAllcandidatures,
    afficherCandidature, 
    postCandidature, 
    modifierCandidature,
    paginationCandidatures,
    afficherEntrepriseParCandidature,
    detailsCandidature,
} = require("../controllers/candidatureController")


const {protectRecruteur,protectCandidat} = require('../middlewares/Protect')
const candidatureRoute = require("express").Router()



candidatureRoute
  // Endpoint to get all candidatures
  .get("/all", protectRecruteur, getAllcandidatures)
  .get('/detailcandidature',detailsCandidature)
    //Endpoint for offer pagination
.get('/pagination',protectCandidat, paginationCandidatures)
// Endpoint to add a new candidature for a specific offre
.post("/add/:idOffre",protectCandidat, postCandidature)
.get('/entreprise/:id',protectCandidat,afficherEntrepriseParCandidature)
  // Endpoint to get a candidature by id 
  .get("/candidat/:id",afficherCandidature)




  // Endpoint to modify a candidature by ID 
  .put('/:id', protectCandidat, modifierCandidature);

module.exports = candidatureRoute;