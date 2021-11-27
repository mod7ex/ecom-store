const express = require("express");
const authenticate = require("../middleware/authenticate");

const {
      getAllCategories,
      createCategory,
      getCategory,
      updateCategory,
      deleteCategory,
} = require("../controllers");

let categoriesRouter = express.Router();

categoriesRouter
      .route("/")
      .get(getAllCategories)
      .post(authenticate, createCategory);
categoriesRouter
      .route("/:id")
      .get(getCategory)
      .patch(authenticate, updateCategory)
      .delete(authenticate, deleteCategory);

module.exports = categoriesRouter;
