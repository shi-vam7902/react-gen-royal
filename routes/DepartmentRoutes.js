const express = require('express')
const DepartmentController = require('../controller/DepartmentController')
const router = express.Router()
router.post("/dept",DepartmentController.addDept)
router.get("/dept",DepartmentController.getAllDept)
module.exports = router