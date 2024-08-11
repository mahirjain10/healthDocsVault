const Express = require('express')
const app = new Express();
require('dotenv').config();
const cookieParser = require("cookie-parser")
const connectDB = require('./config/database');
const userRoutes=require('./routes/userRoutes');
const reportRoutes=require('./routes/reportRoutes')
const prescRoutes=require('./routes/prescRoutes')
const {notFoundRoute} =require('./middleware/notFoundRoute');
const { errorHandler } = require('./middleware/errorHandler');

connectDB();
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(cookieParser());
app.use('/api/user',userRoutes);
app.use('/api/user',reportRoutes);
app.use('/api/user',prescRoutes);
app.use('/*',notFoundRoute);
app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log("server up and running on port 8000");
})