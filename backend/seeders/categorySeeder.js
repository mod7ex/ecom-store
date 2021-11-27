const faker = require("faker");
const { Category } = require("../models");

let generateCategories = async (n = 10) => {
      let categories = [];

      if (n < 1) {
            n = 10;
      }

      for (let i = 0; i < n; i++) {
            categories.push({
                  name: faker.commerce.department(),

                  description: faker.lorem.paragraph(2),
            });
      }

      await Category.create(categories);
};

module.exports = generateCategories;
