const multer = require("multer");
const path = require("path");

const uploadSchema = require("../model/UploadModel");
// const readFromExcel = require("../util/ReadDataFromExcel");
const googleController = require("./GoogleController");
//where to store the path of file
// this is the storage where the uploaded file is stored
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
//save for files
// uploads
const upload = multer({
  storage: storage,
  
  limits: { fileSize: 900000 },
  // fileFilter: function (req, file, cb1) {
  //   // if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpeg") {
  // cb1(null, true);
  //   // } else {
  //   //   console.log("in else");
  //   //   return cb1(new Error("Only jpeg and png allowed"), false);
  //   // }
  // },
}).single("file");
exports.getFilePath;
exports.mydata = [];
exports.uploadFile = (req, res) => {
  upload(req, res, (err, data) => {
    var size = req.file.size;
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "file Uplaod Fail",
        error: err.message,
      });
    } else {
      if (req.file == undefined) {
        res.status(400).json({
          message: "No File Selected",
          data: data,
        });
      } else {
        console.log(req.file.mimetype);
        console.log(req.file.size);
        if (size > 5000000) {
          return res.status(402).json({
            error: "file Size Is to large",
          });
        } else {
          var x = googleController.uploadFile(req.file.path);
          if (!x == undefined || !x == null) {
            res.status(200).json({
              message: "File Upload done",
              file: x,
            });
          }
        }
        // uploadSchema.save((err, data) => {
        //   if (err) {
        //     res.status(400).json({
        //       message: "error in saving file",
        //     });
        //   } else {
        //     res.status(200).json({
        //       message: "Data uploaded SuccesFully",
        //       file: `uploads/${req.file.originalname}`,
        //     });
        //   }
        // });
      }
    }
  });
};
