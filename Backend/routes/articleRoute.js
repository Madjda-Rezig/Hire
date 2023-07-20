const {
    ajouterArticle,
    lireArticle,
    lireTousArticles,
    modifierArticle,
    supprimerArticle,
    paginationArticle
    
} = require('../controllers/articleController');
const  {protectAdmin} = require('../middlewares/Protect')
const multer = require('multer')
const path = require('path')
const articleRouter = require("express").Router()

const upload = multer({
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
})


articleRouter
  // Endpoint to get all articles
  .get('/', lireTousArticles)

  // Endpoint for article pagination
  .get('/pagination', paginationArticle)
  
  // Endpoint to add a new article
  .post('/', upload.single('photo'), ajouterArticle)

  // Endpoint to get a specific article by ID
  .get('/:id', lireArticle)


  // Endpoint to modify an article by ID 
  .put('/:id', protectAdmin, modifierArticle)

  // Endpoint to delete an article by ID
  .delete('/delete/:id', supprimerArticle);

module.exports = articleRouter;
