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