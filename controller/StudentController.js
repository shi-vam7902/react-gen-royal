const StudentSchema = require("../model/StudentModel");
exports.createStudent = (req, res) => {
  console.log("....", req.body);

  const students = new StudentSchema(req.body);

  students.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "something went wrong",
        error: err,
      });
    } else {
      console.log(data);
      res.status(201).json({
        message: "Student Added Succesfully",
        data: data,
      });
    }
  });
};
exports.getAllStudents = (req, res) => {
  StudentSchema.find((err, data) => {
    if (err) {
      res.status(500).json({
        message: "something went wrong",
      });
    } else {
      console.log(data);
      res.status(201).json({
        message: "data Retrived",
        data: data,
      });
    }
  });
};

exports.deleteById = (req, res) => {
  console.log("indelete by id");
  var id = req.params.id;
  console.log(id);

  StudentSchema.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error Deleting Data",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          data: data,
          message: "Student Deleted Succesfully",
        });
      } else {
        res.status(404).json({
          message: "Data not Found",
        });
      }
    }
  });
};

exports.updateStud = (req, res) => {
  console.log(req.body.sname);
  if (
    req.body.sname == undefined ||
    req.body.semail == undefined ||
    req.body.sage == undefined ||
    req.body.sstatus == undefined
  ) {
    console.log("Bad Request");
    res.status(400).json({
      message: "Bad Request",
    });
  } else {
    var user = {
      sname: req.body.sname,
      semail: req.body.semail,
      sage: req.body.sage,
      sstatus: req.body.sstatus,
    };
  }
  var id = req.params.id;
  console.log(id);
  console.log(user);
  StudentSchema.findByIdAndUpdate(id, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error Updating data",
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Record Updated",
        data: data,
      });
    }
  });
};
exports.getStudById = (req, res) => {
  var id = req.params.id;
  console.log(id);
  StudentSchema.findById(id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).json({
        message: "data not found",
      });
    } else {
      res.status(200).json({
        message: "data retrived",
        data: data,
      });
    }
  });
};
exports.insertBulk = (req, res) => {
  const students = new StudentSchema(req, res);
  StudentSchema.insertMany(students, (err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message || "Some Error occured while creting",
      });
    } else {
      res.status(201).json({
        message: "Employee Created Succesfully",
        data: data,
      });
    }
  });
};
