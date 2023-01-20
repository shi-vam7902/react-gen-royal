const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EmployeeSchema = new Schema({
    name:{
        type:String,
        required : true
    },
    department:[{
        type:Schema.Types.ObjectId,
        ref:'departments'
    }]
})
module.exports = mongoose.model('employees',EmployeeSchema)