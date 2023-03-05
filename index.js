const express = require('express')
const app = express()
const PORT = process.env.PORT || 9090
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const studentRoute = require("./routes/studentRoutes")
app.use("/students", studentRoute)

const productRoute = require("./routes/productRoutes")
app.use("/products", productRoute)

const departmentRoutes = require('./routes/DepartmentRoutes')
app.use("/departments", departmentRoutes)

const employeeRoutes = require("./routes/EmployeeRoutes")
app.use("/employees", employeeRoutes)

const userRoutes = require("./routes/UserRoutes")
app.use("/users",userRoutes)

const cartRoutes = require("./routes/CartRoutes")
app.use("/carts",cartRoutes)

const uploadRoutes = require("./routes/UploadRoutes")
app.use("/uploads",uploadRoutes)

const songRoutes = require("./routes/SongRoutes")
app.use("/song",songRoutes)

const listRoutes = require("./routes/PlayListRoutes")
app.use("/playlist",listRoutes)

const role = require("./routes/RoleRoutes")
app.use("/roles",role)


const signup = require("./routes/SignupRoutes")
app.use("/sign",signup)


app.listen(PORT, () => {
    console.log("Server Started on 9090");
})


mongoose.connect("mongodb+srv://root:root@cluster0.fsjkio0.mongodb.net/RoyalMongoGen?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    socketTimeoutMS: 30000,

}, (err) => {
    if (err) {
        console.log(err);
        console.log("Error Connecting db");
    }
    else {
        console.log(" Cluster Created ->  Connection Established");
    }

})


