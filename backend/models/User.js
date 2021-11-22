require("dotenv").config();
const mongoose = require("mongoose");
const { BadRequestError } = require("../errors");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

let userSchema = new mongoose.Schema({
      name: {
            type: String,
            required: [true, "Name is required"],
            maxLength: 32,
      },

      email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            match: [
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  "Please enter a valid email",
            ],
            maxLength: 320,
      },

      address: {
            type: Object,
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

userSchema.post("validate", function () {
      if (this.password.length < 6 || this.password.length > 32)
            throw new BadRequestError(
                  "password length should be between 6 and 32"
            );
});

userSchema.pre("save", async function () {
      // hashing the password
      let salt = await bcryptjs.genSalt(10);
      this.password = await bcryptjs.hash(this.password, salt);
});

userSchema.methods.tokenize = function () {
      return jwt.sign(
            {
                  _id: this._id,
                  name: this.name,
                  email: this.email,
            },
            process.env.JWT_SECRET,
            {
                  expiresIn: process.env.JWT_LIFE_TIME,
            }
      );
};

// Virtual fields
userSchema.virtual("front_user").get(function () {
      return {
            _id: this._id,
            name: this.name,
            email: this.email,
      };
});

userSchema.methods.checkPassword = async function (passwd) {
      let isValid = await bcryptjs.compare(passwd, this.password);
      return isValid;
};

module.exports = mongoose.model("User", userSchema);
