const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("inside jwtmiddleware")
    // get token from request
    let token = req.headers['authorization'].slice(7)
    console.log(token);
    // verify token
    const jwtResponse = jwt.verify(token ,'alphonsa790237')
    console.log(jwtResponse);
    req.payload = jwtResponse.userId
    next()
    
}
module.exports = jwtMiddleware