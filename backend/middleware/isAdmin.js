module.exports = function(req,res,next){
  if (!(req.user.role === "admin")) {
    return res.status(403).json({
      message:"You do not have access permission"
    })
  }
  next();
}