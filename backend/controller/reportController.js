const { isValidObjectId } = require("mongoose");
const cloudinary = require("../config/cloudinary");
const { DocDetailsModel } = require("../models/doc_details");
const { sendResponse } = require("../utils/sendResponse");
const { UserModel } = require("../models/user");
const {v4:uuidv4} =require('uuid');
const { ReportModel } = require("../models/reports");

exports.uploadReports = async (req, res, next) => {
  const { doctor, date, user_id,desc } = req.body;
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
          folder:'reports',
          resource_type: "auto",
        });
        console.log(secure_url,"public_id : ",public_id)
      const report=new ReportModel({public_id,url:secure_url,uuid,file_name:file.filename});
      await report.save();
    })
    const doc_details = new DocDetailsModel({
      doctor,
      date,
      user: user_id,
      uuid,
      doc_type:'report',
      no_of_doc:req.files.length,
      desc:desc
    });
    await doc_details.save();
    return sendResponse(res,201,{message:`doctor details and ${req.files.length} reports uploaded successfully`})
  } catch (error) {
    next(error);
  }
};

exports.updateDocDetails = async (req, res, next) => {
  const { doctor, date,_id,desc} = req.body;
  console.log(req.body)
  try {
    if (!isValidObjectId(_id)) {
      return sendResponse(res, 400, { message: "Invalid ObjectId" });
    }

    const findDocDetails=await DocDetailsModel.findOne({_id});
    if(!findDocDetails){
      return sendResponse(res,404,{message:"Document not found"});
    }
    findDocDetails.doctor=doctor;
    findDocDetails.date=date;
    findDocDetails.desc=desc;
    await findDocDetails.save();
    return sendResponse(res,200,{message:"Document details updated successfully"})
  } catch (error) {
    next(error);
  }
};

exports.uploadMoreReports=async(req,res,next)=>{
  const {uuid}=req.body;
  console.log(req.body);
  console.log(uuid)
  try{
    if(!req.files){
      return sendResponse(res,404,{message:"Files not found !!!"})
    }
    const findReports=await ReportModel.findOne({uuid});
    let findDocDetails=await DocDetailsModel.findOne({uuid});
    if(!findReports){
      return sendResponse(res,404,{message:"Reports not found"});
    }
    // console.log("no of doc : ",findDocDetails.no_of_doc);
    // console.log("no of doc + file len : ",findDocDetails.no_of_doc+req.files.length)
    if(findDocDetails.no_of_doc===10){
      return sendResponse(res,400,{message:"Cannot upload more than 10 images"});
    }
    if(findDocDetails.no_of_doc+req.files.length>10){
      return sendResponse(res,400,{message:`You can only upload ${10-findReports.no_of_doc} more images`})
    }
    req.files.map(async(file)=>{ 
      const {secure_url,public_id}=await cloudinary.uploader.upload(
        file.path,
        {
          folder:'reports',
          resource_type: "auto",
        });
        console.log(secure_url,"public_id : ",public_id)
        const report=new ReportModel({public_id,url:secure_url,uuid,file_name:file.filename});
        await report.save();
      })
      findDocDetails.no_of_doc=findDocDetails.no_of_doc+req.files.length;

      // console.log(findDocDetails.no_of_doc)
      await findDocDetails.save();
      return sendResponse(res,200,{message:"Reports uploaded successfully"})
  }
  catch(error){
    next(error);
  }
}

exports.deleteAnImage=async(req,res,next)=>{
  const{_id,uuid}=req.body;
  try{
    if(!isValidObjectId(_id)){
      return sendResponse(res,400,{message:"Invalid ObjectId"});
    }
    const findReport=await ReportModel.findOne({_id});
    if(!findReport){
      return sendResponse(res,404,{message:"Report not found"});
    }
    if(findReport.uuid!==uuid){
      return sendResponse(res,400,{message:"UUID mismatch"});
    }
    const deletedImage=await ReportModel.deleteOne({_id});
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

exports.deleteDetailsAndReports=async(req,res)=>{
  const {uuid}=req.body
  try{
    const deletedDocDetails=await DocDetailsModel.deleteMany({uuid});
    const deletedReports=await ReportModel.deleteMany({uuid});
    // console.log(deletedDocDetails);
    // console.log(deletedReports);
    if(deletedDocDetails.deletedCount===0 && deletedReports.deletedCount===0){
      return sendResponse(res,404,{message:"Doctor details and reports associated with provided uuid not found "})
    }
    else if(deletedDocDetails.deletedCount===0){
      return sendResponse(res,404,{message:"Doctor details not found"})
    }
    else if(deletedReports.deletedCount===0){
      return sendResponse(res,404,{message:"Reports not found"})
    }
    return sendResponse(res,200,{message:`Deleted details and ${deletedReports.deletedCount} reports successfully`})
  }
  catch(error){
    next(error)
  }
}
