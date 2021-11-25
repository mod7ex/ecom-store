const express = require("express");
const {
      getAllCategories,
      createCategory,
      getCategory,
      updateCategory,
      deleteCategory,
} = require("../controllers");

let categoriesRouter = express.Router();

categoriesRouter.route("/").get(getAllCategories).post(createCategory);
categoriesRouter
      .route("/:id")
      .get(getCategory)
      .patch(updateCategory)
      .delete(deleteCategory);

module.exports = categoriesRouter;
