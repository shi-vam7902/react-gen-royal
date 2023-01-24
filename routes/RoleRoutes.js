const express = require('express')
const router = express.Router()
const roleController = require('../controller/RoleController')
router.post("/role",roleController.createRole)
module.exports = router 