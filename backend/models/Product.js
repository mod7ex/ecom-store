const mongoose = require("mongoose");

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
                  videos: [String],
                  images: [String],
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

            tax_class: {
                  type: mongoose.SchemaTypes.ObjectId,
                  ref: "TaxClass",
            },

            purchase_note: {
                  // sent to the customer after purshase
                  type: String,
                  maxlength: 512,
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
                  stock_quantity: Number,
                  sku: {
                        type: String,
                        minlength: 8,
                        maxLength: 12,
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

            taxable: {
                  type: Boolean,
                  default: true,
            },

            settings: {
                  ratings: {
                        enabled: {
                              type: Boolean,
                              default: true,
                        },
                        only_from_verified_owners: Boolean, // only customers who have bough the product can leave a rating
                  },

                  reviews: {
                        enabled: Boolean,
                        only_from_verified_owners: {
                              // only customers who have bough the product can leave a review
                              type: Boolean,
                              default: true,
                        },
                        show_verified_owner_label: {
                              type: Boolean,
                              default: true,
                        },
                        require_rating_to_leave_review: {
                              type: Boolean,
                              default: true,
                        },
                  },

                  stock: {
                        low_stock: {
                              notify: {
                                    type: Boolean,
                                    default: false,
                              },
                              threshold: {
                                    type: Number,
                                    default: 2,
                              },
                        },

                        out_of_stock: {
                              notify: {
                                    type: Boolean,
                                    default: false,
                              },
                              hide: {
                                    // hide the product from listing
                                    type: Boolean,
                                    default: false,
                              },
                              threshold: {
                                    type: Number,
                                    default: 0,
                              },
                        },

                        status: {
                              show: {
                                    // either to show stock to the customer
                                    type: Boolean,
                                    default: true,
                              },
                              display_format: {
                                    type: String,
                                    enum: [
                                          "always_show", // ex: x items left
                                          "only_show_at_low_stock", // ex: only x items left
                                          "in_stock",
                                          "out_of_stock",
                                    ],
                                    default: "only_show_at_low_stock",
                              },
                        },

                        hold_stock: {
                              // when this limit is reached; pending orders are cancelled
                              type: Number,
                              default: 10080,
                        },
                  },
            },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
