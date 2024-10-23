const Product = require("../models/product.model.js");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
};

const getSpecificProduct = async (req, res) => {
  try {
    //6717c5f4f663843660d5f314
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).send("Product not found");
    }
    const updatedProduct = await Product.findByIdAndUpdate(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).send("Product not found");
    }
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
};

module.exports = {
  getAllProducts,
  getSpecificProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
