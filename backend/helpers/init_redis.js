require("dotenv").config();
const redis = require("redis");

const redisClient = redis.createClient({
      port: process.env.PORT_REDIS || 6379,
      host: process.env.HOST_REDIS || "127.0.0.1",
});

let trackRedis = (client = redisClient) => {
      console.log("tracking redis now ....................");

      client.on("connect", () => {
            console.error("\nClient connected to redis ...");
      });

      client.on("ready", () => {
            console.error("\nClient connected to redis and ready to use ...");
      });

      client.on("error", (err) => {
            console.error(err.message);
      });

      client.on("end", () => {
            console.error("\nClient disconnected from redis ...");
      });

      process.on("SIGINT", () => {
            client.quit();
            // process.exit(0);
      });
};

module.exports = { redisClient, trackRedis };
