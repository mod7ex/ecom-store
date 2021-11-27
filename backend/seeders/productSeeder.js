const faker = require("faker");
const { Product, Company, Category } = require("../models");

let generateProducts = async (n = 10) => {
      let products = [];

      if (n < 1) {
            n = 10;
      }

      for (let i = 0; i < n; i++) {
            let company = (
                  await Company.aggregate([
                        { $sample: { size: 1 } },
                        { $project: { _id: 1 } },
                  ])
            )[0]._id;

            let category = (
                  await Category.aggregate([
                        { $sample: { size: 1 } },
                        { $project: { _id: 1 } },
                  ])
            )[0]._id;

            products.push({
                  sku: faker.datatype.string(10),

                  name: faker.commerce.productName(),

                  description: faker.commerce.productDescription(),

                  image: faker.image.imageUrl(300, 300),

                  regular_price: faker.datatype.number({
                        min: 20,
                        max: 30,
                  }),

                  sale_price: faker.datatype.number({
                        min: 10,
                        max: 20,
                  }),

                  company,

                  category,

                  featured: faker.datatype.boolean(),
            });
      }

      await Product.create(products);
};

module.exports = generateProducts;
