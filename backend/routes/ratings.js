const express = require("express");
const authenticate = require("../middleware/authenticate");

const {
      getAllRatings,
      createRating,
      getRating,
      updateRating,
      deleteRating,
} = require("../controllers");

let ratingsRouter = express.Router();

ratingsRouter
      .route("/")
      .get(authenticate, getAllRatings)
      .post(authenticate, createRating);
ratingsRouter
      .route("/:id")
      .get(getRating)
      .patch(authenticate, updateRating)
      .delete(authenticate, deleteRating);

module.exports = ratingsRouter;
