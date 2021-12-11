const express = require("express");
const authenticate = require("../middleware/authenticate");

const {
      getAllReviews,
      getAllProductReviews,
      createReview,
      getReview,
      updateReview,
      deleteReview,
} = require("../controllers");

let reviewsRouter = express.Router();

reviewsRouter.route("/").get(getAllReviews);

reviewsRouter
      .route("/:productID")
      .get(getAllProductReviews)
      .post(authenticate, createReview);

reviewsRouter
      .route("/:id")
      .get(getReview)
      .patch(authenticate, updateReview)
      .delete(authenticate, deleteReview);

module.exports = reviewsRouter;
