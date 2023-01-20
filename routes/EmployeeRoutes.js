const express = require('express')
const router = express.Router()
const EmployeeController = require("../controller/EmployeeController")
router.get("/empl",EmployeeController.getAllEmployees)
router.post("/empl",EmployeeController.addEmployee)
router.post("/empl/bulk",EmployeeController.insertBulkEmployee)
module.exports = router