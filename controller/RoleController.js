const roleSchema = require("../model/RoleSchema")

exports.createRole = (req,res)=>{
    const role = new roleSchema(req.body);
    role.save().then((data)=>{
        res.status(200).json({
            message:""
        })
    })
    
}