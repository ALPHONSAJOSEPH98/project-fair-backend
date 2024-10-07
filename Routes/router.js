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
    module.exports = router