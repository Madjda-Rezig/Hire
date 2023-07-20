const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')

//Gen refresh token
const generateToken = (data) => {
  const token = jwt.sign({_id:data._id,role:data.role,mail:data.mail}, process.env.ACCESS_TOKEN, { expiresIn: "500000000000000000000000m" });
  return token;
};


exports.ajouterUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
    const userExist = await userModel.find({mail:req.body.mail})
    if (userExist.length) throw new Error("Utilisatuer Exist")

    const user = await UserModel.create({
      ...req.body,
      cv: req.myFileName, // Save the generated filename in the cv field
      mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
    });
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'jesse.lebsack6@ethereal.email',
        pass: 'YBRHsz1yScAn5PYJas'
    }
    });

    const mailOptions = {
      from: 'Workupcontact@gmail.com',
      to: user.mail,
      subject: 'Welcome to WorkUp',
      text: `Hello ${user.nom},

Thank you for joining WorkUp. We are excited to have you on board.

Please feel free to reach out if you have any questions or need assistance.

Best regards,

Your WorkUp Team`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).json({
      _id: user._id,
      accessToken: generateToken(user),
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});



//////////////////////////////////////////////

// Show all users
exports.allUsers = expressAsyncHandler(async (req, res) => {
  try {
    const users = await userModel.find({})
      
    res.status(200).json(users);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});


// Endpoint pour afficher tous les utilisateurs dont le rôle est Candidat
exports.getCandidats = expressAsyncHandler(async (req, res) => {
  try {
    const candidats = await userModel.find({ role: "Candidat" });
    res.status(200).json(candidats);
  } catch (error) {
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des candidats." });
  }
});

// Endpoint pour afficher tous les utilisateurs dont le rôle est Recruteur
exports.getRecruteurs = expressAsyncHandler(async (req, res) => {
  try {
    const recruteurs = await userModel.find({ role: "Recruteur" });
    res.status(200).json(recruteurs);
  } catch (error) {
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des recruteurs." });
  }
});

//////////////////////////////////////////////

// Show user with id 
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

//////////////////////////////////////////////

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

//////////////////////////////////////////////

//Autodelte his account
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
  

