const mongoose = require("mongoose");

let companySchema = new mongoose.Schema(
      {
            name: {
                  type: String,
                  required: [true, "Name is required"],
                  maxLength: 64,
            },

            description: {
                  type: String,
                  maxLength: 512,
            },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
