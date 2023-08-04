const Express = require('express');
const router = Express.Router();
const { uploadPrescMW } = require('../middleware/prescFilter');
const {uploadPresc, uploadMorePresc, deleteAPrescImage, deleteDetailsAndPresc} = require('../controller/prescController')

router.post('/upload-prescription',uploadPrescMW.array('prescription',5),uploadPresc);
router.post('/upload-more-prescription',uploadPrescMW.array('prescription',5),uploadMorePresc)
router.delete('/delete-a-prescription',deleteAPrescImage)
router.delete('/delete-details-prescription',deleteDetailsAndPresc)

module.exports=router