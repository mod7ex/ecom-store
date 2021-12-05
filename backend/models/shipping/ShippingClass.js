const mongoose = require("mongoose");

let ShippingClassSchema = new mongoose.Schema({
      name: {
            type: String,
            maxlength: 24,
            required: [true, "Shipping class name is required"],
      },

      slug: {
            type: String,
            maxlength: 24,
      },

      description: {
            type: String,
            maxlength: 64,
      },
});

module.exports = mongoose.model("ShippingClass", ShippingClassSchema);
