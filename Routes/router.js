// 1. import express
const express = require('express')
// 4 . import usercontroller
 const userController = require('../Controllers/userController')
 // 5 import projectcontroller
 const projectController = require('../Controllers/projectController')
 //
 const jwtMiddleware = require('../Middlewares/jwtMiddleware')
// multer middleware
const multerConfig = require('../Middlewares/multerMiddleware')
// 2. Create router from express
const router = express.Router()
// 3. create route for each requests
  // 1. Register route :localhost:3000/api/register

    router.post('/api/register' , userController.register)
    router.post('/api/login' , userController.login)
    router.post('/api/addProject',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

    // get all users project find ()
     router.get('/api/getAllProjects' ,jwtMiddleware , projectController.getAllprojects)
    // get all projects of particular user find({userid})
     router.get('/api/getUserProjects',jwtMiddleware,projectController.getUserProjects)
    // get home projects find().limit(3)
    router.get('/api/getHomeProject',jwtMiddleware,projectController.getHomeProject)

    module.exports = router