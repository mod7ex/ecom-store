const { Category } = require("../models");
const { StatusCodes } = require("http-status-codes");

let getAllCategories = async (req, res, next) => {
      let categories = await Category.find({});
      res.status(StatusCodes.OK).json(categories);
};

let createCategory = async (req, res, next) => {
      let category = await Category.create(req.body);
      res.status(StatusCodes.CREATED).json(category);
};

let getCategory = async (req, res, next) => {
      let { id } = req.params;
      let category = await Category.findById(id);
      res.status(StatusCodes.OK).json(category);
};

let updateCategory = async (req, res, next) => {
      let { id } = req.params;
      let category = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
      });
      res.status(StatusCodes.OK).json(category);
};

let deleteCategory = async (req, res, next) => {
      let { id } = req.params;
      let category = await Category.findByIdAndDelete(id);
      res.status(StatusCodes.OK).json(category);
};

module.exports = {
      getAllCategories,
      createCategory,
      getCategory,
      updateCategory,
      deleteCategory,
};
