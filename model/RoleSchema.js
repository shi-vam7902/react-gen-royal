const mongoose = require('mongoose')
const schema = mongoose.Schema
const roleSchema = schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    }
})
module.exports = mongoose.model("roles",roleSchema)