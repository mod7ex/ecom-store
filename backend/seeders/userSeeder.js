const faker = require("faker");
const { User } = require("../models");

let generateUsers = async (n = 10) => {
      // let r = Math.floor(Math.random() * 26 + 7);
      let users = [];

      if (n < 1) {
            n = 10;
      }

      for (let i = 0; i < n; i++) {
            users.push({
                  name: faker.name.findName(),

                  email: faker.internet.email(),

                  address: `${faker.address.country()} ${faker.address.city()} ${faker.address.zipCode()} ${faker.address.streetAddress()}`,

                  password: faker.lorem.word(13),
            });
      }

      await User.create(users);
};

module.exports = generateUsers;
