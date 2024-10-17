const projects = require('../Models/projectSchema')

exports.addProject = async(req,res)=>{
    console.log("inside add project controller")
    const {title,language,github,website,overview} = req.body
    const projectImage= req.file.filename
    const userId = req.payload
    try {
      const existingProject = await projects.findOne({github})
     if(existingProject){
        res.status(406).json("project already exist")
     }
      else {
        const newProject = new projects({
            title,language,github,website,overview,projectImage,userId 
        })
        await newProject.save()
        res.status(200).send(newProject)
      }
    }
    catch(error){
 res.status(500).json("server error " + error)
    }
    
}
exports.getAllprojects = async(req,res)=>{
  console.log("inside get project contoller");
  const searchKey = req.query.search
  const query={
    language:{
      $regex:searchKey,
      $options:'i'
    }
  }
  try{
    const getAllProjects= await projects.find(query)
    res.status(200).json(getAllProjects)
  }
  catch(error){
    res.status(500).json("server error " + error)
  }
  
}

exports.getUserProjects = async(req,res)=>{
  console.log("inside getprojects");
  const userId =req.payload
  try{
    
    const getUserProjects = await projects.find({userId})
    res.status(200).json(getUserProjects)
    console.log(userId)
  }
  catch(error){
    res.status(500).json("error" +error)
  }
  
}
exports.getHomeProject= async(req,res)=>{
  console.log("inside get 3 projects");
  
  try{
    const getHomeProject= await projects.find().limit(3)
  res.status(200).json(getHomeProject)
  }
  catch(error){
    res.status(504).json("server error" + error)
  }
}

// edit project 
exports.editProject = async (req,res)=>{
  console.log("inside edit project ")
    const {title,language,github,website,overview,projectImage} = req.body
    const uploadImg= req.file ? req.file.filename :projectImage
    const userId = req.payload
    const {projectId} = req.params
 try{
  console.log("inside editt")
  
  const updateProject = await projects.findByIdAndUpdate({_id:projectId },{title:title ,language:language,github:github,website:website,overview:overview,projectImage:uploadImg ,userId})
   
  // console.log(userId)
  
  await  updateProject.save()
  res.status(200).json(updateProject)
 }
 catch(error){
  res.status(500).json("error" +error)
 }
}

// delete project 
exports.deleteProject = async(req,res)=>{
  console.log("inside delete");
  
  const {projectId} = req.params
  try{
    await projects.findByIdAndDelete({_id:projectId})
    res.status(200).json("project deleted successfully")
  }
  catch(error){
    console.log("error"+error);
    res.status(500).json("error"+error)
  }
}

// 