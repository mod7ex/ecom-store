require("dotenv").config();
require("express-async-errors");
const express = require("express");
require("./helpers/init_redis");

const connectDB = require("./db/connect");

const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const authenticate = require("./middleware/authenticate");

const { authRouter, usersRouter, productsRouter } = require("./routes");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticate, usersRouter);
app.use("/api/v1/products", authenticate, productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

let start = async () => {
      try {
            await connectDB(process.env.MONGO_URI);

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
