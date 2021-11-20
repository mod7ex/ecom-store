const mongoose = require("mongoose");

const connectDB = (url) => {
      return mongoose.connect(url);
};

process.on("SIGINT", async () => {
      await mongoose.connection.close();
      process.exit(0);
});

mongoose.connection.on("connected", () => {
      console.log("\nConnected to db ...");
});

mongoose.connection.on("error", (err) => {
      console.log(err);
});

mongoose.connection.on("disconnected", () => {
      console.log("\nDisconnected from db ...");
});

module.exports = connectDB;
