const mongoose = require("mongoose");
const faker = require("faker");

let attributeSchema = new mongoose.Schema({
      name: {
            type: String,
            maxlength: 32,
      },
      values: [
            {
                  type: String,
                  maxlength: 16,
            },
      ],
      visible_on_product_page: {
            type: Boolean,
            default: true,
      },
});

let productSchema = new mongoose.Schema(
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

            creatives: {
                  main_image: {
                        type: String,
                        required: true,
                  },
                  images: [String],
                  videos: [String],
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

            price: {
                  regular: {
                        type: Number,
                        required: [true, "Regular price is required"],
                  },

                  sale: {
                        value: Number,
                        schedulable: {
                              yes: { type: Boolean, default: false },
                              schedule: {
                                    from: Date,
                                    to: Date,
                              },
                        },
                  },
            },

            purchase_note: {
                  // sent to the customer after purshase
                  type: String,
                  maxlength: 512,
            },

            tax: {
                  taxable: {
                        type: Boolean,
                        default: true,
                  },

                  tax_class: {
                        type: mongoose.SchemaTypes.ObjectId,
                        ref: "TaxClass",
                  },
            },

            inventory: {
                  stock_quantity: {
                        type: Number,
                        default: faker.datatype.number(100),
                  },
                  sku: {
                        type: String,
                        minlength: 8,
                        maxLength: 12,
                        default: faker.datatype.string(10),
                  },
                  sold_individually: {
                        type: Boolean,
                        default: false,
                  },
                  backorders: {
                        allow: Boolean,
                        notify_customer: Boolean, // only true if backorders are allowed
                  },
            },

            shipping: {
                  weight: {
                        value: Number,
                        unit: {
                              type: String,
                              enum: ["kg", "g", "lbs", "oz"],
                        },
                  },
                  dimensions: {
                        length: Number,
                        width: Number,
                        height: Number,
                        unit: {
                              type: String,
                              enum: ["m", "cm", "mm", "in", "yd"],
                        },
                  },
                  shipping_class: {
                        type: mongoose.SchemaTypes.ObjectId,
                        ref: "ShippingClass",
                  },
            },

            linked_products: {
                  up_sells: [
                        { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
                  ],
                  cross_sells: [
                        { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
                  ],
            },

            attributes: [attributeSchema],

            settings: {
                  reviews: {
                        enabled: Boolean,
                        only_from_verified_owners: Boolean, // only customers who have bough the product can leave a review
                        show_verified_owner_label: Boolean,
                        require_rating_to_leave_review: Boolean,
                        ratings: {
                              enabled: Boolean,
                        },
                  },

                  stock: {
                        low_stock: {
                              notify: Boolean,
                              threshold: Number,
                        },

                        out_of_stock: {
                              notify: Boolean,
                              hide: Boolean, // hide the product from listing
                              threshold: Number,
                        },

                        status: {
                              show: Boolean, // either to show stock to the customer
                              display_format: {
                                    type: String,
                                    enum: [
                                          "always_show", // ex: x items left
                                          "only_show_at_low_stock", // ex: only x items left
                                          "in_stock",
                                          "out_of_stock",
                                    ],
                                    // default: "only_show_at_low_stock",
                              },
                        },

                        hold_stock: Number, // when this limit is reached; pending orders are cancelled // default: 10080,
                  },
            },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
