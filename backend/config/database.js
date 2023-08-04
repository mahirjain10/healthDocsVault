const {connect} = require('mongoose');
require('dotenv').config();
const {MONGO_URI} = process.env
const connectDB = async()=>{
    try {
        await connect(MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log('connected to database successfully')
    }
    catch(error){
        console.log(error)
    }
    
}
module.exports=connectDB