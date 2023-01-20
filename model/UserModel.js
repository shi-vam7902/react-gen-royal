const mongoose = require('mongoose')
const schema = mongoose.Schema
const userSchema = schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    isMarried:{
        type:Boolean
    }
})
module.exports = mongoose.model("users",userSchema);