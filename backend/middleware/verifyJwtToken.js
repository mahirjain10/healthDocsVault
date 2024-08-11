exports.verifyJwtToken=(req,res,next)=>{
    const token= req.cookies.token;
    console.log(token)
}