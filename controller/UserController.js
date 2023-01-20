const userSchema = require("../model/UserModel")
exports.createUser = (req, res) => {
  const user = new userSchema(req.body);

  user.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Error in Saving User",
      });
    } else {

      res.status(201).json({
        data: data,
        message: "Data Saved SucessFully",
      });
      console.log(data);
    }
  });
};
exports.getAllUsers = (req, res) => {
  userSchema.find((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error Fetching Data",
      });
    } else {
      res.status(200).json({
        data: data,
        message: "Data fetched SuccessFully",
      });
    }
  });
};
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  userSchema.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error is deleting Data",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(500).json({
            message:"Data Deleted SuccesFully"
        });
      } else {
        res.status(404).json({
            message:"Data Not Found"
        })
      }
    }
  });
};
exports.updateUser = (req, res) => {
   
    console.log(req.body.name);
    if (
      req.body.name == undefined ||
      req.body.email == undefined ||
      req.body.password == undefined ||
      req.body.age == undefined ||
      req.body.isMarried == undefined
    ) {
      console.log("Bad request");
      res.status(400).json({
        message: "Bad request",
      });
    } else {
      
      var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        isMarried: req.body.isMarried,
      };
  
      const id = req.params.id;
      
      userSchema.findByIdAndUpdate(id, req.body, (err, data) => {
        if (err) {
          res.status(500).json({
            message: "Error in updating data",
          });
        } else {
          if(data!=null || data!=undefined){
              res.status(200).json({
                  data: data,
                  message: "Data updated successfully",
              });
          }
          else{
              res.status(404).json({
                  message: "Data not found",
              });
          }
        }
      });
    }
  };

exports.getUserById = (req,res)=>{
    const id = req.params.id;
    userSchema.findById(id,(err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in Fetching data"
            })
        }else
        {
            if(data != null || data != undefined)
            {
                res.status(200).json({
                    message:"Data Fetched SuccesFully",
                    user:data
                })
            }
            else
            {
                res.status(404).json({
                   message:"Data not Found" 
                })
            }
        }
    })
  };