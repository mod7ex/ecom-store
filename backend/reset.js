const { redisClient } = require("./helpers/init_redis");
const { connectDB } = require("./db/connect");

let resetDB = async () => {
      try {
            /**
             * clear Redis Cash
             */
            redisClient.flushall();
            // redisClient.flushdb()
            redisClient.quit(() => {
                  console.log("\nRedis cash has been cleared ...");
            });

            /**
             * reset mongoDB
             */
            let conn = await connectDB();

            let collections = await conn.connection.db.collections();

            if (collections.length) {
                  for (const i in collections) {
                        let collection = collections[i];
                        await collection.drop();
                  }
            }

            await conn.connection.close();
            console.log("\nmongodb database has been reset ...\n");
            process.exit(0);
      } catch (error) {
            console.log(error);
            process.exit(1);
      }
};

resetDB();
