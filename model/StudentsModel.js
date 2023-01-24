const mongoose = require('mongoose')
const schema = mongoose.Schema
const studentSchema =  schema(
    {
        sname: {
            type: String
        },
        semail: {
            type: String
        },
        sage: {
            type: Number
        },
        sstatus: {
            type: Boolean
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("students",studentSchema)