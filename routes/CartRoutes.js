const express = require('express')
const router = express.Router()
const cartController = require('../controller/CartController')
router.post("/cart",cartController.createCart)
router.get("/cart",cartController.getAllCarts)
router.get("/cart/user/:id",cartController.getCartById)
module.exports = router
