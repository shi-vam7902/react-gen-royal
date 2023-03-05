const mongoose = require('mongoose')
const schema = mongoose.Schema
const signupSchema = new schema({
    name:{
        type:String,
        required:true
    },
    // email:{
    //     type:String,
    //     required:true
    // },
    password:{
        type:String
    }
})
module.exports = mongoose.model('signup',signupSchema)