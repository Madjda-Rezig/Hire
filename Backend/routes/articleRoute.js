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

.get('/', lireTousArticles)
.get('/pagination', paginationArticle)
.get('/:id', lireArticle)

.post('/',upload.single('photo'),protectAdmin, ajouterArticle)
.put('/:id',protectAdmin, modifierArticle)
.delete('/:id',protectAdmin, supprimerArticle)


module.exports = articleRouter
