const {sign} = require("jsonwebtoken");
require('dotenv').config();

exports.generateJwtToken=async(user_id,)=>{
    const jwtToken = await sign({user_id},process.env.JWT_SECRET_TOKEN,{
        expiresIn:17
    })
    console.log(jwtToken);
    return jwtToken;

}