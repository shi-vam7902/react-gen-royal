const DepartmentSchema = require("../model/DepartmentModel")
exports.addDept = (req, res) => {
    department = new DepartmentSchema(req.body)
    console.log(req.body);
    department.save((err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                Message: "SWW"
            })
        }
        else {
            res.status(201).json({
                message: "Dept Added",
                data: data
            })
        }
    })
}

exports.getAllDept = (req,res)=>{

    DepartmentSchema.find((err,data)=>
    {
        if(err)
        {
            console.log(err);
            res.status(500).json({
                message:"SWWW"
            })
        }
        else
        {
           res.status(201).json({
            message:"Data found",
            data:data

           })
        }
    })
}