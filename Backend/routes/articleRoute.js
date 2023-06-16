const {
    ajouterArticle,
    lireArticle,
    lireTousArticles,
    modifierArticle,
    supprimerArticle,
    paginationExample
    
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
            callback(null, `${Date.now().toString()}.jpeg`)
        }
    })
})

articleRouter

.get('/', lireTousArticles)
.get('/:id', lireArticle)
.post('/',upload.single('photo'),protectAdmin, ajouterArticle)
.put('/:id',protectAdmin, modifierArticle)
.delete('/:id',protectAdmin, supprimerArticle)
.get('/pagination', paginationExample)

module.exports = articleRouter
