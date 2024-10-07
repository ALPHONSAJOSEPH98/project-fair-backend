// import mongoose 

const mongoose = require('mongoose')
// create connection string

const connection_string = process.env.CONNECTION_STRING

// connect to database 
mongoose.connect(connection_string).then((res)=>{
    console.log("Mongodb coonection established with pfServer")
    
}).catch((err)=>{
    console.log("Mongodb connection error :" +err)
    
})
