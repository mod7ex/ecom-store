const mongoose = require("mongoose");

let resetDB = () => {
      return mongoose.connection.dropDatabase();
};

module.exports = resetDB;
