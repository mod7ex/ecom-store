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

let Shipping_method_schema = new mongoose.Schema({
      shipping_method: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "ShippingMethod",
            required: true,
      },

      shipping_class_costs: [shipping_class_cost],

      calculation_type: {
            type: String,
            enum: [
                  "per_class", // charge shipping for each class individually
                  "per_order", // charge shipping for the most expensive shippig class
            ],
      },

      settings: Object,
});

let ShippingZoneSchema = new mongoose.Schema({
      name: {
            type: String,
            maxlength: 16,
            required: [true, "Shipping zone name is required"],
      },

      regions: {
            names: [String],
            zip_poscodes: [String], // wildcards (e.g. CB23*) & numeric ranges (e.g. 90210...99000)
      },

      shipping_methods: [Shipping_method_schema],
});

module.exports = mongoose.model("ShippingZone", ShippingZoneSchema);
