const express = require("express");
const {
    subscribeToNewsletter 
} = require("../controllers/newsletterController")

const  {protectRecruteur, protectCandidat,protectUser} = require('../middlewares/Protect')
const newsletterRouter = require("express").Router()

newsletterRouter
// Endpoint to get all offers
.post("/subscribe", subscribeToNewsletter )

module.exports = newsletterRouter;