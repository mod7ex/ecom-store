const { Product } = require("../models");
const { StatusCodes } = require("http-status-codes");

let getAllProducts = async (req, res, next) => {
      let products = await Product.find({});
      res.status(StatusCodes.OK).json(products);
};

let createProduct = async (req, res, next) => {
      let product = await Product.create(req.body);
      res.status(StatusCodes.CREATED).json(product);
};

let getProduct = async (req, res, next) => {
      let { id } = req.params;
      let product = await Product.findById(id);
      res.status(StatusCodes.OK).json(product);
};

let updateProduct = async (req, res, next) => {
      let { id } = req.params;
      let product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
      });
      res.status(StatusCodes.OK).json(product);
};

let deleteProduct = async (req, res, next) => {
      let { id } = req.params;
      let product = await Product.findByIdAndDelete(id);
      res.status(StatusCodes.OK).json(product);
};

let getSearchedProducts = async (req, res, next) => {
      res.send("get searched products");
};

module.exports = {
      getAllProducts,
      createProduct,
      getProduct,
      updateProduct,
      deleteProduct,
      getSearchedProducts,
};
