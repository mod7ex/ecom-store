require("dotenv").config();
const { UnauthorizedError } = require("../errors");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const redisClient = require("../helpers/init_redis");

const { promisify } = require("util");
const getAsync = promisify(redisClient.get).bind(redisClient);

const authenticate = async (req, res, next) => {
      let authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new UnauthorizedError("Not allowed");
      }

      let token = authHeader.split(" ")[1];

      let payload = jwt.verify(token, process.env.JWT_SECRET);

      //
      let redisToken = await getAsync(payload._id);
      if (!redisToken || redisToken != token) {
            throw new UnauthorizedError("Not allowed");
      }
      //

      // make sure that the user exists (hasn't been removed)
      let user = await User.findById(payload._id);

      if (!user) {
            throw new UnauthorizedError("Not allowed");
      }

      req.user = user;

      next();
};

module.exports = authenticate;
