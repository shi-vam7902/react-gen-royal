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
},
{
    timestamps:true
})
module.exports = mongoose.model("roles",roleSchema)