const mongoose = require("mongoose");

const connectDB = (url) => {
      return mongoose.connect(url);
};

mongoose.connection.on("connected", () => {
      console.log("\nConnected to mongoDB ...");
});

mongoose.connection.on("error", (err) => {
      console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
      console.log("\nDisconnected from mongoDB ...");
});

process.on("SIGINT", async () => {
      await mongoose.connection.close();
      process.exit(0);
});

module.exports = connectDB;
