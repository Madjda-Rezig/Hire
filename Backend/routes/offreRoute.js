const { 
     getAllOffres,
     postOffer,
     deleteOffre,
     updateOffer,
     getAppliedOffres,
     getEntrepriseOffres,
     paginationOffres,
     afficherOffre} = require("../controllers/offreController")


const  {protectRecruteur, protectCandidat,protectUser} = require('../middlewares/Protect')
const offreRouter = require("express").Router()

offreRouter
// Endpoint to get all offers
.get("/all", getAllOffres)
//Endpoint for offer pagination
.get('/pagination', paginationOffres)
// Endpoint to add a new offer
.post("/add", postOffer)
// Endpoint to get a specific offer by ID
.get("/:id",afficherOffre)
// Endpoint to delete an offer by ID
.delete("/:id",protectRecruteur,deleteOffre)
// Endpoint to update an offer by ID
.put("/:id",protectRecruteur,updateOffer)
// Endpoint to get applied offers for a candidat
.get("/:candidatId",protectCandidat,getAppliedOffres )
// Endpoint to get offers by entreprise
.get("/entreprise/:entreprise",protectUser,getEntrepriseOffres )


module.exports = offreRouter