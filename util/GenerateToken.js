const jwt = require('jsonwebtoken')
const secret = 'secret'
const generateToken = (user) =>{
   return  jwt.sign({user},secret,{expiresIn:'1h'})

}

// console.log(generateToken({user:"Shivam",age:20}))
module.exports = {generateToken}