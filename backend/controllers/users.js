const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");

let getAllUsers = async (req, res, next) => {
      let users = await User.find({});
      res.status(StatusCodes.OK).json(users);
};

let createUser = async (req, res, next) => {
      let user = await User.create(req.body);
      res.status(StatusCodes.CREATED).json(user);
};

let getUser = async (req, res, next) => {
      let { id } = req.params;
      let user = await User.findById(id);
      res.status(StatusCodes.OK).json(user);
};

let updateUser = async (req, res, next) => {
      let { id } = req.params;
      let user = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
      });
      res.status(StatusCodes.OK).json(user);
};

let deleteUser = async (req, res, next) => {
      let { id } = req.params;
      let user = await User.findByIdAndDelete(id);
      res.status(StatusCodes.OK).json(user);
};

module.exports = {
      getAllUsers,
      createUser,
      getUser,
      updateUser,
      deleteUser,
};
