const cloudinary=require('../config/cloudinary')
const { isValidObjectId } = require("mongoose");
const {sendResponse}=require('../utils/sendResponse')
const {PrescModel} = require('../models/prescription');
const {UserModel}=require('../models/user')
const {DocDetailsModel} = require('../models/doc_details');
const {v4:uuidv4} =require('uuid')

exports.uploadPresc=async(req,res,next)=>{
    const { doctor, date, user_id,desc ,recordFor} = req.body;
  console.log(req.files);
  try {
    if(!req.files){
      return sendResponse(res,404,{message:"Files not found !!!"})
    }
    if (!isValidObjectId(user_id)) {
      return sendResponse(res, 400, { message: "Invalid ObjectId" });
    }
    const findUser=await UserModel.findOne({_id:user_id});
    if(!findUser){
      return sendResponse(res,404,{message:"User not found"});
    }
    const uuid=uuidv4();
    req.files.map(async(file)=>{ 
      const {secure_url,public_id}=await cloudinary.uploader.upload(
        file.path,
        {
          folder:'prescription',
          resource_type: "auto",
        });
        console.log(secure_url,"public_id : ",public_id)
      const report=new PrescModel({public_id,url:secure_url,uuid,file_name:file.filename});
      await report.save();
    })
    const doc_details = new DocDetailsModel({
      doctor,
      date,
      user: user_id,
      uuid,
      doc_type:'prescription',
      no_of_doc:req.files.length,
      desc:desc,
      recordFor
    });
    await doc_details.save();
    return sendResponse(res,201,{message:`Doctor details and ${req.files.length} prescription for ${recordFor} uploaded successfully`})
  } catch (error) {
    next(error);
  }
}

exports.uploadMorePresc=async(req,res,next)=>{
  const {uuid}=req.body;
  console.log(req.body);
  console.log(uuid)
  try{
    if(!req.files){
      return sendResponse(res,404,{message:"Files not found !!!"})
    }
    const findPresc=await PrescModel.findOne({uuid});
    let findDocDetails=await DocDetailsModel.findOne({uuid});
    if(!findPresc){
      return sendResponse(res,404,{message:"Prescriptions not found"});
    }
    if(findDocDetails.no_of_doc===5){
      return sendResponse(res,400,{message:"Cannot upload more than 10 images"});
    }
    if(findDocDetails.no_of_doc+req.files.length>5){
      return sendResponse(res,400,{message:`You can only upload ${5-findDocDetails.no_of_doc} more images`})
    }
    req.files.map(async(file)=>{ 
      const {secure_url,public_id}=await cloudinary.uploader.upload(
        file.path,
        {
          folder:'prescription',
          resource_type: "auto",
        });
        console.log(secure_url,"public_id : ",public_id)
        const presc=new PrescModel({public_id,url:secure_url,uuid,file_name:file.filename});
        await presc.save();
      })
      findDocDetails.no_of_doc=findDocDetails.no_of_doc+req.files.length;

      // console.log(findDocDetails.no_of_doc)
      await findDocDetails.save();
      return sendResponse(res,200,{message:"Prescription uploaded successfully"})
  }
  catch(error){
    next(error);
  }
}

exports.deleteAPrescImage=async(req,res,next)=>{
  const{_id,uuid}=req.body;
  try{
    if(!isValidObjectId(_id)){
      return sendResponse(res,400,{message:"Invalid ObjectId"});
    }
    const findPresc=await PrescModel.findOne({_id});
    if(!findPresc){
      return sendResponse(res,404,{message:"Report not found"});
    }
    if(findPresc.uuid!==uuid){
      return sendResponse(res,400,{message:"UUID mismatch"});
    }
    const deletedImage=await PrescModel.deleteOne({_id});
    if(!deletedImage){
      return sendResponse(res,409,{message:"Couldn't delete image.Please try again"})
    }
    const findDocDetails=await DocDetailsModel.findOne({uuid});
    findDocDetails.no_of_doc=findDocDetails.no_of_doc--;
    await findDocDetails.save();
    return sendResponse(res,200,{message:"Deleted an image successfully"});
  }
  catch(error){
    next(error)
  }
}

exports.deleteDetailsAndPresc=async(req,res)=>{
  const {uuid}=req.body
  try{
    const deletedDocDetails=await DocDetailsModel.deleteMany({uuid});
    const deletedPresc=await PrescModel.deleteMany({uuid});
    if(deletedDocDetails.deletedCount===0 && deletedPresc.deletedCount===0){
      return sendResponse(res,404,{message:"Doctor details and prescriptions associated with provided uuid not found "})
    }
    else if(deletedDocDetails.deletedCount===0){
      return sendResponse(res,404,{message:"Doctor details not found"})
    }
    else if(deletedPresc.deletedCount===0){
      return sendResponse(res,404,{message:"Prescriptions not found"})
    }
    return sendResponse(res,200,{message:`Deleted details and ${deletedPresc.deletedCount} prescription successfully`})
  }
  catch(error){
    next(error)
  }
}
