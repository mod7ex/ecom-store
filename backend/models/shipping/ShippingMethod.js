const mongoose = require("mongoose");

let ShippingMethodSchema = new mongoose.Schema({
      title: {
            type: String,
            maxlength: 24,
            required: [true, "Shipping method title is required"],
      },

      description: {
            type: String,
            maxlength: 64,
      },

      taxable: {
            // tax status
            type: Boolean,
            default: true,
      },

      cost: {
            type: String, // we use placeholders like [qty], [cost] & [fee]
      },

      settings: Object,
});

module.exports = mongoose.model("ShippingMethod", ShippingMethodSchema);
