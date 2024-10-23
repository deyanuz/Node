const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {
  getAllProducts,
  getSpecificProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//get all products
router.get("/", getAllProducts);

//add a new product
router.post("/", addNewProduct);

//get specific product
router.get("/:id", getSpecificProduct);

//update a product
router.put("/:id", updateProduct);

//delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
