const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthorizedError } = require("../errors");

let register = async (req, res, next) => {
      let user = await User.create(req.body);
      let token = user.tokenize();
      res.status(StatusCodes.CREATED).json({ user, token });
};

let login = async (req, res, next) => {
      let { email, password } = req.body;

      if (!email || !password || password.length < 6 || password.length > 32) {
            throw new BadRequestError("Incorrect password");
      }

      let user = await User.findOne({ email });

      if (!user) {
            throw new UnauthorizedError("Incorrect data");
      }

      let isValid = await user.checkPassword(password);

      if (!isValid) {
            throw new UnauthorizedError("Incorrect data");
      }

      let token = user.tokenize();
      res.status(StatusCodes.OK).json({ user, token });
};

let logout = async (req, res, next) => {
      res.send("logout User");
};

module.exports = {
      register,
      login,
      logout,
};
