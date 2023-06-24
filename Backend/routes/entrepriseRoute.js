const {
    afficherEntreprises,
    afficherEntreprise,
    ajouterEntreprise,
    supprimerEntreprise,
    modifierEntreprise ,
    paginationEntreprises

} = require("../controllers/entrepriseController")

const  {protectRecruteur, protectCandidat,protectUser, protectAdmin} = require('../middlewares/Protect')
const multer = require('multer')
const path = require('path')
const entrepriseRouter = require("express").Router()

const upload = multer(
    {
        storage: multer.diskStorage({
            destination: function(req,file,callback) {
                callback(null, path.join(__dirname, "../images") )
            },
            filename: function (req, file, callback) {
                const currentFileName =Date.now().toString()
                callback(null, `${currentFileName}.${file.mimetype.toString().split('/')[1]}`)
                req.myFileName =  `${currentFileName}.${file.mimetype.toString().split('/')[1]}`
            }
        })
    }
)


entrepriseRouter
  // Endpoint to get all entreprises
  .get("/all", afficherEntreprises)

  // Endpoint for entreprise pagination
  .get('/pagination', paginationEntreprises)

  // Endpoint to get a specific entreprise by ID
  .get("/:id", afficherEntreprise)

  // Endpoint to add a new entreprise
  .post("/add", upload.single("logo"), protectAdmin, ajouterEntreprise)

  // Endpoint to delete an entreprise by ID
  .delete("/:id", protectAdmin, supprimerEntreprise)

  // Endpoint to modify an entreprise by ID
  .put("/:id", protectAdmin, modifierEntreprise);

module.exports = entrepriseRouter;
