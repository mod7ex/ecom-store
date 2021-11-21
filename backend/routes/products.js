const express = require("express");
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
productsRouter.route("/").get(getAllProducts).post(createProduct);
productsRouter
      .route("/:id")
      .get(getProduct)
      .patch(updateProduct)
      .delete(deleteProduct);

module.exports = productsRouter;
