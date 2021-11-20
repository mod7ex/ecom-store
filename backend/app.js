require("dotenv").config();
require("express-async-errors");
const express = require("express");

const connectDB = require("./db/connect");
const resetDB = require("./db/reset");

const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/auth");
app.use("/api/v1/products");

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

let start = async () => {
      try {
            await connectDB(process.env.MONGO_URI);
            // if (process.env.NODE_ENV == "development") await resetDB();

            app.listen(port, () => {
                  console.log(
                        `Server listening on port ${port} in ${process.env.NODE_ENV} mode \ncheck http://localhost:${port}/`
                  );
            });
      } catch (error) {
            console.log(error);
      }
};

start();
