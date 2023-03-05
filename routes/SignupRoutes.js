const express = require("express")
const SignupController = require('../controller/SignUpController')
const router = express.Router()
router.post("/signup",SignupController.signup)
router.post("/validate",SignupController.validate)
router.post("/login",SignupController.login)
module.exports = router