const express = require("express");
const Controller = require("../controllers");

const router = express.Router();

//Get cart of user:
router.get("/:user_id", Controller.getCurrentCart);

//Add product to cart:
router.put("/add_product", Controller.addProductToCart);

//Change productList in cart:
router.put("/change_productList", Controller.changeProductListCart);

module.exports = router;
