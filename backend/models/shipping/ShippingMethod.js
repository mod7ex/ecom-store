const mongoose = require("mongoose");

let shipping_class_cost = new mongoose.Schema({
      shipping_class: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
      },
      cost: {
            type: String, // we use placeholders like [qty], [cost] & [fee]
      },
});

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

      no_shipping_class_cost: {
            type: String, // we use placeholders like [qty], [cost] & [fee]
      },

      shipping_class_costs: [shipping_class_cost],

      calculation_type: {
            type: String,
            enum: [
                  "per_class", // charge shipping for each class individually
                  "per_order", // charge shipping for the most expensive shippig class
            ],
      },
});

module.exports = mongoose.model("ShippingMethod", ShippingMethodSchema);
