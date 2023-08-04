const Express = require('express');
const router = Express.Router();
const {createUser, login, userDetails, updateUserDetails}=require('../controller/userController');
const {validatorResult}=require('../middleware/userValidator');

router.post('/create-user',createUser);
router.post('/login',login);
router.post('/user-details',userDetails);
router.patch('/update-user-details',updateUserDetails)

module.exports=router