const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const userModel = require("../models/userModel");

//Create a user
exports.ajouterUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
    const user = await UserModel.create({
      ...req.body,
      mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
    })

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'giovanny.veum@ethereal.email',
      pass: '2J3Rene9SC7A4wzq9F'
  }
});

  // send mail with defined transport object
  let info =  transporter.sendMail({
    from: 'rezigmadjda@gmail.com', // sender address
    to: user.mail, // list of receivers
    subject: "Hello  ", // Subject line
    text: `bienvenue  ${user.nom}`, // plain text body
  },
  function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log("Email sent: " + info.response)
    }
  })
    res.status(201).json("l'utilisateur a été crée !")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})


// Afficher All users
exports.allUsers = expressAsyncHandler(async (req, res) => {
  try {
    const users = await userModel.find({})
      
    res.status(200).json(users);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Afficher user par id 
exports.afficherUser = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      res.status(404);
      throw new Error("User do not exist");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});


//////////////////////////////////////////////

//Update a user
exports.modifierUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.user._id;
    await UserModel.findByIdAndUpdate(id, req.body);
    res.status(200).json("User updated!");
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//Delete a user
exports.supprimerUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await UserModel.findByIdAndDelete(id);
    res.status(202).json("User deleted Successfully:");
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
//Delete his account
exports.autoDelete = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.user._id;
    await UserModel.findByIdAndDelete(id);
    res.status(202).json("User deleted Successfully:");
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
