const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = (url = process.env.MONGO_URI) => {
      return mongoose.connect(url);
};

const trackMONGO = () => {
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
};

module.exports = { connectDB, trackMONGO };
