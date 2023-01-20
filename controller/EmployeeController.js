const employeeSchema = require('../model/EmployeeModel')
var mydata = require('../controller/UploadController')
exports.addEmployee = (req, res) => {
  
    const employee = new employeeSchema(req.body)
  
    employee.save((err, data) => {
        if (err) {
            res.status(500).json({
                Message: "SMWW"
            })
        }
        else {
            res.status(200).json({
                message: "Employee Created",
                data: data
            })
        }
    })
}
exports.getAllEmployees = (req, res) => {
    // employeeSchema.find((err, data) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(200).json({
    //             message: "SomeThing went Wrong",
    //             data: data
    //         })
    //     }
    //     else {
    //         res.status(200).json({
    //             message:"employee reterived",
    //             data:data
    //         })
    //     }
    // })
    employeeSchema.find({}).populate('department').exec((err,data)=>{
        if(err)
        {
            console.log(err);
            res.status(500).json({
                message:"SWW",
                data:data
            })
        }
        else
        {
            res.status(200).json({
                message:"Data FOund",
                data:data
            })
        }
    })
}
//BulkInsert is only for customizin the url as on when required
exports.insertBulkEmployee =((req,res)=>{
    
    
     employeeSchema.insertMany(mydata,(err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error Saving"
            })
        }
        else
        {
            // const employee = new employeeSchema(mydata)
            // employeeSchema.insertMany(employee)
            // console.log(employee);        
            res.status(200).json({
                message:"Data Saved SuccesFully",
                data:data
            })
        }
     })
})