require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const connectDB = require("./db/connect");
const resetDB = require("./db/reset");

const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

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
