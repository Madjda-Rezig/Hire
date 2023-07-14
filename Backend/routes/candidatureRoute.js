const {
    getAllcandidatures,
    afficherCandidature, 
    postCandidature, 
    modifierCandidature,
    paginationCandidatures,
} = require("../controllers/candidatureController")


const {protectRecruteur,protectCandidat} = require('../middlewares/Protect')
const candidatureRoute = require("express").Router()



candidatureRoute
  // Endpoint to get all candidatures
  .get("/all", protectRecruteur, getAllcandidatures)

    //Endpoint for offer pagination
.get('/pagination',protectCandidat, paginationCandidatures)
// Endpoint to add a new candidature for a specific offre
.post("/add/:idOffre",protectCandidat, postCandidature)

  // Endpoint to get a candidature by id 
  .get("/candidat/:id",afficherCandidature)




  // Endpoint to modify a candidature by ID 
  .put('/:id', protectCandidat, modifierCandidature);

module.exports = candidatureRoute;