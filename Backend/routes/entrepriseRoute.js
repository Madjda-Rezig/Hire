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
.get("/all",afficherEntreprises)
.get('/pagination', paginationEntreprises)
.get("/:id",afficherEntreprise)
.post("/add",upload.single("logo"), protectAdmin, ajouterEntreprise)
.delete("/:id", protectRecruteur, supprimerEntreprise)
.put("/:id", protectRecruteur, modifierEntreprise)

module.exports = entrepriseRouter;
