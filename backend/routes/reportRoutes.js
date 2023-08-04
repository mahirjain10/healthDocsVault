const Express = require('express');
const router = Express.Router();
const {uploadReport} = require('../middleware/reportsFilter')
const {uploadReports, updateDocDetails, uploadMoreReports, deleteAnImage, deleteDetailsAndReports} = require('../controller/reportController')

// router.post('/upload-report',uploadReport.fields([{name:'report',maxCount:5}]),uploadReports);
router.post('/upload-report',uploadReport.array('report',10),uploadReports);
router.patch('/update-doc-details',updateDocDetails);
router.post('/upload-more-reports',uploadReport.array('report',10),uploadMoreReports);
router.delete('/delete-a-report',deleteAnImage)
router.delete('/delete-details-reports',deleteDetailsAndReports)


module.exports=router
