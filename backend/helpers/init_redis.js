require("dotenv").config();
const redis = require("redis");

const redisClient = redis.createClient({
      port: process.env.PORT_REDIS || 6379,
      host: process.env.HOST_REDIS || "127.0.0.1",
});

redisClient.on("connect", () => {
      console.error("\nClient connected to redis ...");
});

redisClient.on("ready", () => {
      console.error("\nClient connected to redis and ready to use ...");
});

redisClient.on("error", (err) => {
      console.error(err.message);
});

redisClient.on("end", () => {
      console.error("\nClient disconnected from redis ...");
});

process.on("SIGINT", () => {
      redisClient.quit(() => {
            console.log("\nRedis connection closed ...");
      });
});

module.exports = redisClient;
