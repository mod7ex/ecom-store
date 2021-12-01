const mongoose = require("mongoose");

let ShippingClassSchema = new mongoose.Schema({});

module.exports = mongoose.model("ShippingClass", ShippingClassSchema);
