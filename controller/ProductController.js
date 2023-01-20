const ProductSchema = require("../model/ProductModel")
exports.addProduct = (req, res) => {

    const products = new ProductSchema(req.body)

    products.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "something went wrong"
            })
        }
        else {
            res.status(201).json({
                data: data,
                message: "Product Added"
            })
        }
    })
}
exports.getAllProducts = (req, res) => {

    ProductSchema.find((err, data) => {
        if (err) {
            res.status(500).json({
                message: "SomeThing Went Wrong"
            })
        }
        else {

            res.status(201).json({
                message: "data Retrived",
                data: data
            })
        }
    })
}
exports.deleteProductById = (req, res) => {
    var id = req.params.id
    console.log(id);

    ProductSchema.findByIdAndDelete(id, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: "product not deleted",
                error: err
            })
        }
        else {
            if (data != null || data != undefined) {
                res.status(200).json({
                    message: "Data Deleted"
                })
            }
            else {
                res.status(404).json({
                    message: "product Not Found"
                })
            }

        }
    })
}
exports.updatebyId = (req, res) => {

    // if (
    //     req.body.pname == undefined ||
    //     req.body.pprice == undefined ||
    //     req.body.pqty == undefined
    // ) {
    //     console.log("Bad Request");
    //     res.status(400).json({
    //         message: "Bad Request"
    //     })
    // } else {
    //     var prod = {
    //         pname: req.body.pname,
    //         price: req.body.pprice,
    //         pqty: req.body.pqty
    //     }

    // }

    var prod = {
        pname: req.body.pname,
        price: req.body.pprice,
        pqty: req.body.pqty
    }

    var id = req.params.id
    
    ProductSchema.findByIdAndUpdate(id, prod, (err, data) => {
        if (err) {
            res.status(500).json({
                message: "Some thing went wrong"
            })
        }
        else {
            if (data != null || data != undefined) {
                res.status(200).json({
                    message: "Product Updated",
                    data:data
                })
            }
        }
    })
}