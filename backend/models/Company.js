const mongoose = require("mongoose");

let companySchema = new mongoose.Schema({});

module.exports = mongoose.model("Company", companySchema);
