const { getCubeById } = require("../services/cubeServices.js")

module.exports = ()=>async(req,res,next)=>{
  const data = await getCubeById(req.params.id);
  if(data.ownerId == req.user._id){
    next()
  }else{
    res.redirect("/")
  }
}