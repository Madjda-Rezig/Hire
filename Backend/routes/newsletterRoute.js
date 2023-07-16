const express = require("express");
const {
    subscribeToNewsletter,
    getAllSubscribers,
    sendGroupEmail,
    deleteSubscriber
} = require("../controllers/newsletterController")

const  {protectRecruteur, protectCandidat,protectUser} = require('../middlewares/Protect')
const newsletterRouter = require("express").Router()

newsletterRouter
// Endpoint to get all offers
.post("/subscribe", subscribeToNewsletter )
.get("/all",getAllSubscribers)
.post("/allsubscribers",sendGroupEmail)
.delete("/delete/:id",deleteSubscriber)

module.exports = newsletterRouter;