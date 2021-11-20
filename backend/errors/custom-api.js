const { StatusCodes } = require("http-status-codes");

class CustomAPIERROR extends Error {
      constructor(message = "Something went wrong try again later") {
            super(message);
            this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
      }
}

module.exports = CustomAPIERROR;
