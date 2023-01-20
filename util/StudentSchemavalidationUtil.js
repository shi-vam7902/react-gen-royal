const zod = require('zod')
const studentSchema = zod.object({
    body:zod.object({
        sname:zod.string().min(10).max(2),
        semail:zod.string().min(20),
        sage:zod.number().min(18),
        
    })
})
module.exports = studentSchema