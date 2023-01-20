const cartSchema = require("../model/CartModel");
exports.createCart = (req, res) => {
  const cart = new cartSchema(req.body);

  cart.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Error Adding Product in cart",
      });
    } else {
      res.status(201).json({
        message: " Adding Product in cart",
        data: data,
      });
    }
  });
};
exports.getAllCarts = (req, res) => {
  cartSchema
    .find()
    .populate("user")
    .populate("products")
    .exec((err, sucess) => {
      if (err) {
        if (err) {
          res.status(500).json({
            message: "Error in getting cart",
          });
        }
      } else {
        res.status(200).json({
          message: "Cart fetched successfully",
          data: sucess,
        });
      }
    });
};
exports.getCartById = (req, res) => {
  cartSchema
    .findOne({user:req.params.id})
    .populate("users")
    .populate("products")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Cart Details not Found",
        });
      } else {
        console.log(data);
        res.status(201).json({
          message: "Cart Details Found",
          data: data,
        });
      }
    });
};
