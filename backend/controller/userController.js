const { isValidObjectId } = require('mongoose');
const {UserModel} = require('../models/user.js');
const {userDetailsModel}=require('../models/userDetails.js')
const { sendResponse } = require('../utils/sendResponse.js');
const {hash,compare} =require('bcrypt');

// create user account api. 
// check if has an account or not before creating user

exports.createUser=async(req,res,next)=>{
    const {email,password}=req.body
    try{
        const fetchData=await UserModel.findOne({email});
        if(fetchData){
            return sendResponse(res,409,{message:"User already exists"});
        }
        const user=new UserModel({email,password});
        user.password=await hash(password,8);
        await user.save();
        return sendResponse(res,201,{message:'User created successfully'});
    }
    catch(error){
        next(error)
    }
}

exports.login=async(req,res,next)=>{
    const {email,password}=req.body
    try{
        const findUser=await UserModel.findOne({email});
        if(!findUser){
            return sendResponse(res,404,{message:"User associated with this email not found !"});
        }
        const compareHashPassword=await compare(password,findUser.password);
        if(!compareHashPassword){
            return sendResponse(res,401,{message:"Unauthorized,Password invalid"});
        }
        return sendResponse(res,200,{message:"User successfully logged in"})
    }
    catch(error){
        next(error);
    }
}

exports.userDetails=async(req,res,next)=>{
    const {name,age,gender,user_id,role}=req.body

    try{
        if(!isValidObjectId(user_id)){
            return sendResponse(res,400,{message:'Invalid objectId'});
        }
        const findUser=await UserModel.findOne({_id:user_id});
        if(!findUser){
            return sendResponse(res,404,{message:"User not found"});
        }        
        const userDetails=new userDetailsModel({name,age,gender,user:user_id,role});
        await userDetails.save();
        return sendResponse(res,201,{message:'User details saved successfully'});
    }
    catch(error){
        next(error);
    }  
}

// can use user_id to find or ObjId
exports.updateUserDetails=async(req,res,next)=>{
    const {name,age,gender,user_id}=req.body

    try{
        if(!isValidObjectId(user_id)){
            return sendResponse(res,400,{message:'Invalid objectId'});
        }
        const findUserDetails=await userDetailsModel.findOneAndUpdate({user:user_id},{name,age,gender});
        // console.log(findUserDetails)
        if(!findUserDetails){
            return sendResponse(res,404,{message:"User details not found !"})
        }
        return sendResponse(res,200,{message:"User details updated succesfully"});
    }
    catch(error){
        next(error)
    }
}
