const { Review } = require("../models");
const { StatusCodes } = require("http-status-codes");

let getAllReviews = async (req, res, next) => {
      let reviews = await Review.find({});
      res.status(StatusCodes.OK).json(reviews);
};

let getAllProductReviews = async (req, res, next) => {
      let product = req.params.productID;

      let reviews = await Review.find({ product });
      res.status(StatusCodes.OK).json(reviews);
};

let createReview = async (req, res, next) => {
      let { review_content, review_rating } = req.body;
      let product = req.params.productID;
      let user = req.user._id;

      let review_body = { review_content, user, product };

      if (review_rating) {
            review_body.review_rating = review_rating;
      }

      let review = await Review.create(review_body);
      res.status(StatusCodes.CREATED).json(review);
};

let getReview = async (req, res, next) => {
      let { id } = req.params;
      let review = await Review.findById(id);
      res.status(StatusCodes.OK).json(review);
};

let updateReview = async (req, res, next) => {
      let { id } = req.params;
      let { review_content, review_rating } = req.body;

      let review_body = { review_content };

      if (review_rating) {
            review_body.review_rating = review_rating;
      }

      let review = await Review.findByIdAndUpdate(id, review_body, {
            new: true,
            runValidators: true,
      });
      res.status(StatusCodes.OK).json(review);
};

let deleteReview = async (req, res, next) => {
      let { id } = req.params;
      let review = await Review.findByIdAndDelete(id);
      res.status(StatusCodes.OK).json(review);
};

module.exports = {
      getAllReviews,
      getAllProductReviews,
      createReview,
      getReview,
      updateReview,
      deleteReview,
};
