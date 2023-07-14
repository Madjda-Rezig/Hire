const express = require("express");
const {
    addQuestion,
    getRandomQuestions,
    addQuestionREC,
    getRandomQuestionsREC,

} = require("../controllers/faqController")

const  {protectRecruteur, protectCandidat,protectUser} = require('../middlewares/Protect')
const faqRouter = require("express").Router()

faqRouter

.post("/add", addQuestion )
.get("/",getRandomQuestions)
.post("/addREC", addQuestionREC )
.get("/REC",getRandomQuestionsREC)


module.exports = faqRouter;