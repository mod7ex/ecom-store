const { NotFoundError } = require("../errors");

const notFoundMiddleware = () => {
      throw new NotFoundError("Page not found");
};

module.exports = notFoundMiddleware;
