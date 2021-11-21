const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({});

module.exports = mongoose.model("Order", orderSchema);
