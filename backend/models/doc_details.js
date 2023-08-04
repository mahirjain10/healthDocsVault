const {Schema, model,Types:{ObjectId}}=require('mongoose');

const docDetailsSchema=new Schema({
    doctor:{
        type:String
    },
    date:{
        type:Date
    },
    user:{
        type:ObjectId
    },
    uuid:{
        type:String
    },
    doc_type:{
        type:String,
        enum:['report','prescription']
    },
    no_of_doc:{
        type:Number
    },
    desc:{
        type:String
    }
})

const DocDetailsModel=model('doc-details',docDetailsSchema);

module.exports={
    DocDetailsModel
}