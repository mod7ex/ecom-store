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

ShippingClassSchema.pre("save", function () {
      if (!this.slug) {
            this.slug = this.name.split(" ").join("_");
      }
});

module.exports = mongoose.model("ShippingClass", ShippingClassSchema);
