// const joi=require('joi');
// const { sendResponse } = require('../utils/sendResponse');


// const userValidatorSchema=joi.object().keys({
//     email:joi.string().required().email(),
//     password:joi.string().required().min(8).message("Password should be of minimum 8 charachter").max(15).message("Password should be of maximum 15 charachter")
// })

// const validatorResult=(req,res,next)=>{
//     const {error,value}=userValidatorSchema.validate(req.body);
//     console.log(error);
//     console.log(value);
//     error.message= error.map((msg)=>{return msg}).message.replace(/"/g, "")
//     return sendResponse(res,400,{message:error.message});
// }

// module.exports={
//     validatorResult
// }
// // value.pattern(new RegExp(/[a-zA-Z]+/)).message("Password should contain a letter"),
// // value.pattern(new RegExp( /[0-9]+/)).message("Password should contain atleast one alphabet"),
// // value.pattern(new RegExp(/^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]+$/)).message("Password should contain atleast one special charachter")