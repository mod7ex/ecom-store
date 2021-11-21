const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
      name: {
            type: String,
            required: [true, "Name is required"],
            maxLength: 32,
      },

      email: {
            type: String,
            required: [true, "Email is required"],
            maxLength: 320,
      },

      address: {
            type: String,
            required: [true, "Address is required"],
            maxLength: 256,
      },

      password: {
            type: String,
            required: [true, "Password is required"],
      },

      isAdmin: {
            type: Boolean,
            default: false,
      },
});

module.exports = mongoose.model("User", userSchema);
