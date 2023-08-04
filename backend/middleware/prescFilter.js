const multer = require("multer");
const storage = multer.diskStorage({ 
   filename: function (req, file, cb) {
  const uniqueFilename = file.originalname;
  cb(null, uniqueFilename);
}});

const prescFileFilter = (req, file, cb) => {
  console.log(file)
  if (
    file.mimetype.split("/")[1] === "pdf" ||
    file.mimetype.split("/")[0] === "image"
  ) {
    return cb(null, true);
  }
  return cb("Supports only pdf and image files!", false);
};

exports.uploadPrescMW = multer({
  storage,
  fileFilter: prescFileFilter,
  limits: 1048576,
});
