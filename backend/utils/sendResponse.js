exports.sendResponse=(res,statusCode,json)=>{
    // console.log(json);
    // console.log(res.statusCode);
    res.status(statusCode).json({...json,statusCode:res.statusCode});
}