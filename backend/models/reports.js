const {Schema, model,Types:{ObjectId}}=require('mongoose');

const reportSchema=new Schema({
    public_id:{
        type:String
    },
    url:{
        type:String
    },
    uuid:{
        type:String
    },
    file_name:{
        type:String
    }
})

const ReportModel=model('report',reportSchema);

module.exports={
    ReportModel
}