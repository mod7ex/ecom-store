const mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
      {
            sku: {
                  type: String,
                  minlength: 8,
                  maxLength: 12,
            },

            name: {
                  type: String,
                  required: [true, "Name is required"],
                  maxLength: 64,
            },

            description: {
                  type: String,
                  maxLength: 512,
            },

            image: {
                  type: String,
            },

            regular_price: {
                  type: Number,
                  required: [true, "Price is required"],
            },

            sale_price: {
                  type: Number,
            },

            company: {
                  type: mongoose.SchemaTypes.ObjectId,
                  ref: "Company",
            },

            category: {
                  type: mongoose.SchemaTypes.ObjectId,
                  ref: "Category",
            },

            featured: {
                  type: Boolean,
                  default: false,
            },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
