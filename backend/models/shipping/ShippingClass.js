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

// create by default a class called "no shipping class"

module.exports = mongoose.model("ShippingClass", ShippingClassSchema);
