const mongoose = require('mongoose')
const schema = mongoose.Schema
const SongSchema = new schema({
    songname:{
        type:String
    },
    duration:{
        type:Number
    },
    artist:{
        type:String
    }
},{
    timestamps:true
})
module.exports = mongoose.model("songs",SongSchema)