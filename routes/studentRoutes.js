const express  = require("express")
const StudentController = require("../controller/StudentController");
const StudentValidationUtil = require("../util/StudentSchemavalidationUtil");
const validate = require('../middleware/ZodMiddleWare')

const router = express.Router();
router.post("/studs",validate(StudentValidationUtil),StudentController.createStudent);
// console.log("in router link called");
router.get("/studs",StudentController.getAllStudents)
router.delete('/studs/:id',StudentController.deleteById)
router.put("/studs/:id",StudentController.updateStud)
router.get("/studs/:id",StudentController.getStudById)
router.post("/studs/bulk",StudentController.insertBulk)
module.exports = router;
