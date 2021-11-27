const faker = require("faker");
const { Company } = require("../models");

let generateCompanies = async (n = 10) => {
      let companies = [];

      if (n < 1) {
            n = 10;
      }

      for (let i = 0; i < n; i++) {
            companies.push({
                  name: faker.company.companyName(),

                  description: faker.company.catchPhrase(),
            });
      }

      await Company.create(companies);
};

module.exports = generateCompanies;
