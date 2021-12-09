require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { trackRedis } = require("./helpers/init_redis");
const { connectDB, trackMONGO } = require("./db/connect");

const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const authenticate = require("./middleware/authenticate");

const {
      authRouter,
      usersRouter,
      productsRouter,
      categoriesRouter,
      companiesRouter,
      ratingsRouter,
} = require("./routes");

// security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");

const app = express();

const port = process.env.PORT || 3000;

// security middlewares
app.set("trust proxy", 1);
const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(xss());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticate, usersRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/companies", companiesRouter);
app.use("/api/v1/ratings", ratingsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

let start = async () => {
      try {
            trackMONGO(); // track Mongo connection
            await connectDB();

            trackRedis(); // track Redis connection

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
