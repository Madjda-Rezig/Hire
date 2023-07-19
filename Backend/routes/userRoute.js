const {
  ajouterUtilisateur,
  modifierUtilisateur,
  supprimerUtilisateur,
  autoDelete,
  allUsers,
  afficherUser,
  getCandidats,
  getRecruteurs
} = require("../controllers/userController");


const { protectCandidat, protectAdmin ,protectRecruteur,protectUser} = require("../middlewares/Protect");
const userRouter = require("express").Router();
const multer = require('multer')
const path = require("path");



const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname, "../fichiercv"));
    },
    filename: function (req, file, callback) {
      const currentFileName = Date.now().toString();
      callback(null, `${currentFileName}.pdf`);
      req.myFileName = `${currentFileName}.pdf`;
    },
  }),
  fileFilter: function (req, file, callback) {
    if (file.mimetype === "application/pdf") {
      callback(null, true);
    } else {
      callback(new Error("Only PDF files are allowed."));
    }
  },
});



userRouter
  // Endpoint to get all users
  .get('/all',protectAdmin, allUsers)

  
  // Endpoint to add a new user
  .post("/add",upload.single("cv"), ajouterUtilisateur)
  
  // Endpoint to modify a user
  .put("/modifier",protectUser, modifierUtilisateur)
   
  // Endpoint to delete the authenticated user
  .delete("/delete", protectCandidat, autoDelete)

  // Route pour afficher tous les utilisateurs dont le rôle est "Candidat"
  .get('/candidats', getCandidats)

// Route pour afficher tous les utilisateurs dont le rôle est "Recruteur"
  .get('/recruteurs', getRecruteurs)

  // Endpoint to get a specific user by ID
  .get('/:id', afficherUser)

   // Endpoint to delete a user by ID 
   .delete("/supprimer/:id", protectAdmin, supprimerUtilisateur)

  

module.exports = userRouter;
