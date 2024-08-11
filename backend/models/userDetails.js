const {Schema,model,Types:{ObjectId}}=require('mongoose');


const userDetailsSchema=Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String,
        enum:['male','female','transgender','non-binary','doNotWantToSpecify']
    },
    user:{
        type:ObjectId
    },
    role:{
        type:String,
        enum:['doctor','patient']
    }
})

const userDetailsModel=model('user-details',userDetailsSchema);

module.exports={
    userDetailsModel
}