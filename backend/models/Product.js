const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
      name: {
            type: String,
            required: [true, "Name is required"],
            maxLength: 64,
      },

      price: {
            type: String,
            required: [true, "Price is required"],
            maxLength: 64,
      },

      category: {
            type: String,
            required: [true, "Category is required"],
            maxLength: 64,
      },

      company: {
            type: String,
            required: [true, "Company is required"],
            maxLength: 64,
      },
});

module.exports = mongoose.model("Product", productSchema);
