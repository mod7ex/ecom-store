const faker = require("faker");
const { Product, User, Rating } = require("../models");

let generateRatings = async (n = 7) => {
      let ratings = [];

      if (n < 1) {
            n = 10;
      }

      for (let i = 0; i < n; i++) {
            let product = (
                  await Product.aggregate([
                        { $sample: { size: 1 } },
                        { $project: { _id: 1 } },
                  ])
            )[0]._id;

            let user = (
                  await User.aggregate([
                        { $sample: { size: 1 } },
                        { $project: { _id: 1 } },
                  ])
            )[0]._id;

            ratings.push({
                  product,
                  user,
                  value: faker.datatype.number({
                        min: 0,
                        max: 5,
                  }),
            });
      }

      await Rating.create(ratings);
};

module.exports = generateRatings;
