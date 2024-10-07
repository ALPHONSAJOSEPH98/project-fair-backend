// logic for register

// username , email,password =>(email ? in db)
// user already registered: post method execution - data saved in mongodb

const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')
exports.register =async(req , res)=>{
    console.log("inside registerController")
    const{username,email,password}= req.body 
    console.log(username,email,password)

    try{
      // check email in mongodb (model(users))
      const existingUser = await users.findOne({email})
      if(existingUser){
        res.status(401).json("user already registered")
      }
      else{
        // add new user to database
        const newUser = new users({
           username,email,password , github:"" ,linkedin:"" ,profilePic:""
        })
        // save new user to database
        await newUser.save()
        // send response to client
        res.status(200).json(newUser)
      }
    }
    catch(err){
     res.status(401).json({message:err})
    }
    
    
}
exports.login= async (req,res)=>{
  console.log("inside login")
  const{email,password}= req.body 
    console.log(email,password)
  const existingUser= await users.findOne({email,password})
  try{
    if(existingUser){
      // token generation 
      const token = jwt.sign({userId:existingUser._id},process.env.JWT_Key)
      res.status(200).json({user:existingUser,token})
      console.log("login sucessfull")
      
    }
    else{
      res.status(404).json("invalid username and password")
    }
  }
  catch(error){
    res.status(401).json({message:err})
  }
}
