const { Rating } = require("../models");
const { StatusCodes } = require("http-status-codes");

let getAllRatings = async (req, res, next) => {
      let ratings = await Rating.find({});
      res.status(StatusCodes.OK).json(ratings);
};

let createRating = async (req, res, next) => {
      let rating = await Rating.create(req.body);
      res.status(StatusCodes.CREATED).json(rating);
};

let getRating = async (req, res, next) => {
      let { id } = req.params;
      let rating = await Rating.findById(id);
      res.status(StatusCodes.OK).json(rating);
};

let updateRating = async (req, res, next) => {
      let { id } = req.params;
      let rating = await Rating.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
      });
      res.status(StatusCodes.OK).json(rating);
};

let deleteRating = async (req, res, next) => {
      let { id } = req.params;
      let rating = await Rating.findByIdAndDelete(id);
      res.status(StatusCodes.OK).json(rating);
};

module.exports = {
      getAllRatings,
      createRating,
      getRating,
      updateRating,
      deleteRating,
};
