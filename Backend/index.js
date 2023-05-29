const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
mongoose.set('strictQuery', false);
const ErrorHandler = require("./middlewares/ErrorHandler")
const userRouter = require("./routes/userRoute")
const authRouter = require("./routes/authRoute")
const offreRouter = require("./routes/offreRoute")
const categorieRoute = require("./routes/categorieRoute")
const candidatureRoute = require("./routes/candidatureRoute")

const articleRoute = require("./routes/articleRoute")

require("dotenv").config()

const index = express()
index.use(cors({
    origin: 'http://localhost:3000'
  }))
index.use(express.json())
index.use(express.urlencoded({ extended: true }))

index.use("/users", userRouter)
index.use("/auth", authRouter)
index.use("/offres", offreRouter)
index.use("/categories", categorieRoute)
index.use("/candidatures", candidatureRoute)

index.use("/articles", articleRoute)


index.use("/*", (req, res) => {
  res.status(404).json("Not found!")
})
index.use(ErrorHandler)

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    index.listen(process.env.PORT, () => {
      console.log("Server is running")
    })
  })
  .catch((err) => console.log(err))