const express = require("express");
const {
    addQuestion,
    getRandomQuestions
} = require("../controllers/faqController")

const  {protectRecruteur, protectCandidat,protectUser} = require('../middlewares/Protect')
const faqRouter = require("express").Router()

faqRouter

.post("/add", addQuestion )
.get("/",getRandomQuestions)


module.exports = faqRouter;