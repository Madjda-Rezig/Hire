const express = require("express");
const {
    addQuestion,
    getRandomQuestions,
    addQuestionREC,
    getRandomQuestionsREC,

} = require("../controllers/faqController")

const  {protectRecruteur, protectCandidat,protectUser,protectAdmin} = require('../middlewares/Protect')
const faqRouter = require("express").Router()

faqRouter

.post("/add",protectAdmin, addQuestion )
.get("/",getRandomQuestions)
.post("/addREC",protectAdmin, addQuestionREC )
.get("/REC",getRandomQuestionsREC)


module.exports = faqRouter;