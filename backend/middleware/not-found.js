const { NotFoundError } = require("../errors");

const notFoundMiddleware = (req, res, next) => {
      throw new NotFoundError("Page not found");
      // res.end("ggggggggggggggg");
};

module.exports = notFoundMiddleware;
