const express = require("express");
const authenticate = require("../middleware/authenticate");
const {
      getAllProducts,
      createProduct,
      getProduct,
      updateProduct,
      deleteProduct,
      getSearchedProducts,
} = require("../controllers");

let productsRouter = express.Router();

productsRouter.get("/search", getSearchedProducts);
productsRouter.route("/").get(getAllProducts).post(authenticate, createProduct);
productsRouter
      .route("/:id")
      .get(getProduct)
      .patch(authenticate, updateProduct)
      .delete(authenticate, deleteProduct);

module.exports = productsRouter;
