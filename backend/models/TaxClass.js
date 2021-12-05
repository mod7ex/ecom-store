const mongoose = require("mongoose");

let TaxClassSchema = new mongoose.Schema({});

module.exports = mongoose.model("TaxClass", TaxClassSchema);
