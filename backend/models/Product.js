const mongoose = require("mongoose");

let attributeSchema = new mongoose.Schema({
      name: {
            type: String,
            maxlength: 32,
      },
      value: {
            type: String,
            maxlength: 256,
      },
      visible_on_product_page: Boolean,
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

            media: {
                  main_image: String,
                  video: String,
                  images: [String],
            },

            price: {
                  regular: {
                        type: Number,
                        required: [true, "Price is required"],
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

            inventory: {
                  sku: {
                        type: String,
                        minlength: 8,
                        maxLength: 12,
                  },
                  stock_quantity: Number,
                  sold_individually: Boolean,
                  allow_back_orders: Boolean,
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

            purchase_note: {
                  type: String,
                  maxlength: 512,
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

                  stock: {
                        low_stock: {
                              notify: Boolean,
                              threshold: {
                                    type: Number,
                                    default: 2,
                              },
                        },

                        out_of_stock: {
                              notify: Boolean,
                              hide: Boolean, // hide the product from listing
                              threshold: {
                                    type: Number,
                                    default: 0,
                              },
                        },

                        status: {
                              show: Boolean, // either to show stock to the customer
                              display_format: {
                                    type: String,
                                    enum: [
                                          "always_show", // ex: x items left
                                          "only_show_at_low_stock", // ex: only x items left
                                          "never_show",
                                          "in stock",
                                          "Out of stock",
                                    ],
                              },
                        },
                  },

                  shipping: {
                        weight: {
                              value: Number,
                              unit: {
                                    type: String,
                                    enums: ["g", "kg"],
                              },
                        },
                        dimensions: {
                              unit: {
                                    type: String,
                                    enums: ["cm", "m"],
                              },
                              length: Number,
                              width: Number,
                              height: Number,
                        },
                        shipping_class: {
                              type: mongoose.SchemaTypes.ObjectId,
                              ref: "ShippingClass",
                        },
                  },

                  tax: {
                        type: String,
                        enum: ["taxable", "shipping_only"],
                  },
            },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
