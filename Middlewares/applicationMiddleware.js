const applicationMiddleware = (req ,res,next)=>{
    console.log("inside application midleware");
    next()
}
module.exports = applicationMiddleware