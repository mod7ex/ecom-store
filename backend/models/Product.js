const mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
      {
            sku: {
                  type: String,
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

            regular_price: {
                  type: Number,
                  required: [true, "Price is required"],
                  maxLength: 64,
            },

            sale_price: {
                  type: Number,
                  default: null,
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

            rating: {
                  type: Number,
                  default: 0,
            },

            createdAt: {
                  type: Date,
                  default: Date.now(),
            },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
