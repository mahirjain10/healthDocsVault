const {Schema, model}=require('mongoose');
const userSchema=new Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})
const UserModel=model('User',userSchema);
module.exports={
    UserModel
}