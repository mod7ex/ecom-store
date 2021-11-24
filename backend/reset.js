require("dotenv").config();
// const models = require("./models");
const mongoose = require("mongoose");
const redis = require("redis");

let resetDB = async () => {
      try {
            /**
             * clear Redis Cash
             */
            let client = redis.createClient({
                  port: process.env.PORT_REDIS || 6379,
                  host: process.env.HOST_REDIS || "127.0.0.1",
            });

            client.flushall();
            // client.flushdb()
            client.quit(() => {
                  console.log("\nRedis cash has been cleared ...");
            });

            /**
             * reset mongoDB
             */
            let conn = await mongoose.connect(process.env.MONGO_URI);

            let collections = await conn.connection.db.collections();

            if (collections.length) {
                  for (const i in collections) {
                        let collection = collections[i];
                        await collection.drop();
                  }
            }

            await conn.connection.close();
            console.log("\nmongodb database has been reset ...");
            process.exit(0);
      } catch (error) {
            console.log(error);
            process.exit(1);
      }
};

resetDB();
