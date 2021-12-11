const mongoose = require("mongoose");
let coutries = require("../helpers/i18n/countries.json");

let SettingsSchema = new mongoose.Schema({
      general: {
            base_location: {
                  // store location
                  type: String,
                  default: "MA",
            },

            selling_locations: {
                  type: [String],
                  default: coutries,
            },

            shipping_locations: {
                  type: [String],
                  default: coutries,
            },

            default_customer_location: {
                  type: String,
                  enum: [
                        "no_location_by_default",
                        "shop_base_adress",
                        "geolocate",
                        "geolocate_with_page_cashing_support",
                  ],
                  default: "geolocate",
            },

            enable_tax_and_tax_calculations: {
                  type: Boolean,
                  default: false,
            },

            store_notice: {
                  enabled: {
                        type: Boolean,
                        default: false,
                  },

                  dismissable: {
                        type: Boolean,
                        default: true,
                  },

                  value: {
                        type: String,
                        maxlength: 64,
                        default: "lorem ipsum",
                  },
            },

            currency_options: {
                  currency: {
                        type: String,
                        enum: ["Euro €", "dollar $"],
                        default: "Euro €",
                  },

                  currency_position: {
                        /**
                         *
                         * {
                         *    true: right,
                         *    false: left
                         * }
                         *
                         */
                        type: Boolean,
                        default: true,
                  },
            },

            thousand_separator: {
                  type: String,
                  enum: [",", "."],
                  default: ",",
            },

            decimal_separator: {
                  type: String,
                  enum: [",", "."],
                  default: ",",
            },

            number_of_decimals: {
                  type: Number,
                  default: 2,
            },
      },

      checkout: {
            coupons: {
                  enabled: {
                        type: Boolean,
                        default: false,
                  },
                  calculate_coupon_discount_squentially: {
                        // if true apply the first the second ... if false combine them
                        type: Boolean,
                        default: false,
                  },
            },

            guest_checkout_anabled: {
                  // checkout without creating an account
                  type: Boolean,
                  default: false,
            },

            secure_checkout_is_forced: {
                  // force ssl (HTTPS) on checkout page
                  type: Boolean,
                  default: false,
            },

            force_HTTP_when_leaving_checkout: {
                  // only if secure_checkout_is_forced=true
                  type: Boolean,
                  default: false,
            },

            require_Terms_and_Conditions: {
                  type: Boolean,
                  default: false,
            },

            endpoints: {},
      },

      Product: {
            measurements: {
                  weight_unit: {
                        type: String,
                        enum: ["kg", "g", "lbs", "oz"],
                        default: "kg",
                  },

                  dimensions_unit: {
                        type: String,
                        enum: ["m", "cm", "mm", "in", "yd"],
                        default: "cm",
                  },
            },

            sorting: {
                  options: {
                        type: [String],
                        default: [
                              "custom_ordering_plus_name",
                              "popularity_sales",
                              "rating",
                              "recent_added",
                              "price_asc",
                              "price_desc",
                        ],
                  },
                  default: {
                        type: String,
                        enum: [
                              "custom_ordering_plus_name",
                              "popularity_sales",
                              "rating",
                              "recent_added",
                              "price_asc",
                              "price_desc",
                        ],
                        default: "custom_ordering_plus_name",
                  },
            },

            add_to_cart_behaviour: {
                  redirect_to_cart_page: { type: Boolean, default: false },
            },

            images: {
                  catalog: {
                        width: { type: Number, default: 300 },
                        height: { type: Number, default: 300 },
                        hard_crop: { type: Boolean, default: true },
                  },

                  single_product: {
                        width: { type: Number, default: 600 },
                        height: { type: Number, default: 600 },
                        hard_crop: { type: Boolean, default: true },
                  },

                  product_thumbnails: {
                        width: { type: Number, default: 180 },
                        height: { type: Number, default: 180 },
                        hard_crop: { type: Boolean, default: true },
                  },
            },

            notification_recipient: {
                  type: String,
                  default: "mouradface98@mail.com",
            },

            default_product_settings: {
                  reviews: {
                        enabled: {
                              type: Boolean,
                              default: true,
                        },
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
                        ratings: {
                              enabled: {
                                    type: Boolean,
                                    default: true,
                              },
                        },
                  },

                  stock: {
                        low_stock: {
                              notify: {
                                    type: Boolean,
                                    default: true,
                              },
                              threshold: {
                                    type: Number,
                                    default: 2,
                              },
                        },

                        out_of_stock: {
                              notify: {
                                    type: Boolean,
                                    default: true,
                              },
                              hide: {
                                    // hide the product from listing
                                    type: Boolean,
                                    default: true,
                              },
                              threshold: {
                                    type: Number,
                                    default: 2,
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
});

module.exports = mongoose.model("Settings", SettingsSchema);
