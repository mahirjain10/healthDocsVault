const {Schema, model,Types:{ObjectId}}=require('mongoose');

const prescSchema=new Schema({
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

const PrescModel=model('presciption',prescSchema);

module.exports={
    PrescModel
}