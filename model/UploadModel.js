const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uploadSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
    },
    size:{
        type:Number,
    },
    type:{
        type:String,
    }

},{
    timestamps:true
})
module.exports = mongoose.model("uploads",uploadSchema);