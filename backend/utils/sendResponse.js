exports.sendResponse=(res,statusCode,json)=>{
    res.status(statusCode).json({...json,statusCode:res.statusCode});
}