const mongoose = require("mongoose");

let reviewSchema = new mongoose.Schema(
      {
            product: {
                  type: mongoose.SchemaTypes.ObjectId,
                  required: [true, "Product is required"],
                  ref: "Product",
            },

            user: {
                  type: mongoose.SchemaTypes.ObjectId,
                  required: [true, "User is required"],
                  ref: "User",
            },

            review_content: {
                  type: String,
                  maxlength: 512,
                  required: [true, "Review value is required"],
            },

            review_rating: {
                  type: Number,
                  max: 5,
                  min: 0,
            },
      },

      { timestamps: true }
);

reviewSchema.index({ product: 1, user: 1 }, { unique: true });

module.exports = mongoose.model("Review", reviewSchema);
