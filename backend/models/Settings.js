const mongoose = require("mongoose");

let SettingsSchema = new mongoose.Schema({
      general: {
            base_location: {
                  type: String,
            },

            selling_locations: {
                  type: [String], // empty array or property doesn't exist means all countries
            },

            shipping_locations: {
                  type: [String],
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
                        type: Boolean,
                        default: false,
                  }, // if true apply the first the second ... if false combine them
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

      Products: {
            measurements: {
                  weight_unit: {
                        type: String,
                        enum: ["kg", "g", "lbs", "oz"],
                  },

                  dimensions_unit: {
                        type: String,
                        enum: ["m", "cm", "mm", "in", "yd"],
                  },
            },

            default_sorting: {
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
      },
});

module.exports = mongoose.model("Settings", SettingsSchema);
