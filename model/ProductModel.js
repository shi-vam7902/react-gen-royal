const mongoose = require('mongoose')
const schema = mongoose.Schema
const ProductSchema = new schema({
    pname:{
        type:String
    },
    pprice:{
        type:Number
    },
    pqty:{
        type:Number
    }
})
module.exports = mongoose.model("products",ProductSchema)