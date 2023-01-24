const roleSchema = require("../model/RoleSchema");
exports.createRole = (req,res)=>{
  
  const roles = new roleSchema(req.body)
  roles.save((err,data)=>{
    if(err)
    {
      console.log(err);
      res.status(500).json({
        message:"Some thing went wrong",
        error:err
      })
    }
    else{
      console.log(data);
      res.status(200).json({
        message:"role Created",
        data:data
      })
    }
  })
}