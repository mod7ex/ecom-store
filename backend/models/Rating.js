const mongoose = require("mongoose");

let ratingSchema = new mongoose.Schema(
      {
            product: {
                  type: mongoose.SchemaTypes.ObjectId,
                  required: [true, "Product is required"],
            },

            user: {
                  type: mongoose.SchemaTypes.ObjectId,
                  required: [true, "User is required"],
            },

            value: {
                  type: Number,
                  max: 5,
                  min: 0,
            },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Rating", ratingSchema);
