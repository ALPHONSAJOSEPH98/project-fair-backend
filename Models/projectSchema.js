const mongoose = require ('mongoose')
  
// create schema and model 
 const projectSchema = new mongoose.Schema({
    title :{
        type :String ,
        required :true
    } ,
    language :{
        type :String ,
        required :true
    } ,
    github :{
        type :String ,
        required :true
    } ,
    website :{
        type :String ,
        required :true
    } ,
    overview :{
        type :String ,
        required :true
    } ,
    projectImage:{
        type :String ,
        required :true
    } ,
    userId:{
        type :String 
         
    }

 })
 const projects = mongoose.model('projects' ,projectSchema)
 module.exports= projects