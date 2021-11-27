const { connectDB } = require("../db/connect");
const generateUsers = require("./userSeeder");
const generateCategories = require("./categorySeeder");
const generateCompanies = require("./companySeeder");
const generateProducts = require("./productSeeder");
const generateRatings = require("./ratingSeeder");

let seed = async () => {
      let conn = await connectDB();

      process.on("SIGINT", async () => {
            await conn.connection.close(true);
            process.exit(0);
      });

      console.log("seeding database ...");

      // await generateUsers();
      // await generateCategories();
      // await generateCompanies();
      // await generateProducts();
      // await generateRatings();

      process.exit(0);
};

seed();
