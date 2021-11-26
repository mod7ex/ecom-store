const { connectDB } = require("../db/connect");
const generateUser = require("./userSeeder");

let seed = async () => {
      let conn = await connectDB();

      process.on("SIGINT", async () => {
            await conn.connection.close(true);
            process.exit(0);
      });

      console.log("seeding database ...");

      await generateUser();

      process.exit(0);
};

seed();
