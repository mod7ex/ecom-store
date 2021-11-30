const mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
      {
            sku: {
                  type: String,
                  minlength: 8,
                  maxLength: 12,
            },

            inventory: {
                  type: Number,
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
                  type: [String],
            },

            regular_price: {
                  type: Number,
                  required: [true, "Price is required"],
            },

            sale_price: {
                  type: Number,
                  // validate: {
                  //       validator: function (v) {
                  //             return v <= this.regular_price;
                  //       },
                  //       message: (props) => `Error`,
                  // },
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

            settings: {
                  reviews: {
                        enabled: Boolean,
                        only_from_verified_owners: Boolean,
                        show_verified_owner_label: Boolean,
                        require_rating_to_leave_review: Boolean,
                  },

                  ratings: {
                        enabled: Boolean,
                        only_from_verified_owners: Boolean,
                  },
            },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
