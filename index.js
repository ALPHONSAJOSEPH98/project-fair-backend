// 1. load .env file

require('dotenv').config()

//2. import express
const express = require('express')
//3. import cors
const cors = require('cors')

// 10 import router

const router = require('./Routes/router')
 //  import application middleware 
// const applicationMiddleware = require('./Middlewares/applicationMiddleware')

//9 . import db

require('./DB/connection')


//4. create an application using express

const pfServer = express()

// 5. use 
pfServer.use(cors())
pfServer.use(express.json())
// pfServer.use(applicationMiddleware)
pfServer.use(router)
// 6. define port number
const PORT = 3000 || process.env.PORT
// 7. define listen
pfServer.listen(PORT ,(req,res)=>{
    console.log("pf server running on the port " +PORT)
    
})
//8. define client request
pfServer.get('/' ,(req,res)=>{
    res.status(200).send(`<h1>project fair server started .. waiting for client request </h1>`)
})

