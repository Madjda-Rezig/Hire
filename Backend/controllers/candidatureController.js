const candidatureModel = require("../models/candidatureModel")
const expressAsyncHandler = require("express-async-handler")


//Show all applications

exports.getAllcandidatures = expressAsyncHandler(async (req, res) => {
  try {
    const candidatures = await candidatureModel.find()
    res.status(200).json(candidatures)
  } catch (error) {
    res.status(400)
    console.error(error)
  }
})

//////////////////////////////////////////////

//Add an application

exports.postCandidature = expressAsyncHandler(async (req, res) => {
  try {  
    const idCandidat = req.user._id
    const {idOffre} = req.params
    await candidatureModel.create({
      idCandidat,
      idOffre, 
    })
    res.status(201).json("Candidature creer")
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})

//////////////////////////////////////////////


//Update an application

exports.modifierCandidature = expressAsyncHandler(async (req, res) => {
  try {  
    const {id} = req.params
    const {Etat} = req.body
    await candidatureModel.findByIdAndUpdate(id,{Etat})
    res.status(201).json("Candidature Modifier")
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})


//Pagination for application
exports.paginationCandidatures = expressAsyncHandler(async (req, res) => {
  try {
    const { page } = req.query;
    const pages = Math.ceil((await candidatureModel.countDocuments())/8)
    const skipPage = (page - 1) * 8;
    const candidatures = await candidatureModel.find({idCandidat: req.user._id}).skip(skipPage).limit(8);
    res.status(200).json({
      pages,
      candidatures
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
