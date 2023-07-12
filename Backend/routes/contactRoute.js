
const {
    sendMessage,
    getAllMessages,
    deleteMessage
} = require("../controllers/contactController")

const  {protectRecruteur, protectCandidat,protectUser} = require('../middlewares/Protect')
const contactRouter = require("express").Router()

contactRouter

.post("/contactus", sendMessage )
.get("/all",getAllMessages)
.delete("/message/:id", deleteMessage)
module.exports = contactRouter;