const express = require("express");
const Controller = require("../controllers");

const router = express.Router();

//Get all products
router.get("/products_all", Controller.getProductsAll);

//Get all flash_sale products
router.get("/flash_sale", Controller.getFlashSale);

//Get all flash_sale products
router.get("/khuyen_mai", Controller.getKhuyenMai);

//Get single product
router.get("/:id", Controller.getSingleProduct);

//Post new product
router.post("/create_new_product", Controller.createNewProduct);

//Get at home
router.get("/", Controller.getAtHome);

module.exports = router;
