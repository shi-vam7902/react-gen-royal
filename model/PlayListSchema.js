const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PlayList = new Schema({
    playListName:{
        type:String,
        required : true
    },
    songs:[{
        type:Schema.Types.ObjectId,
        ref:'songs'
    }]
})
module.exports = mongoose.model('playlists',PlayList)