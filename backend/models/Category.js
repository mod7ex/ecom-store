const mongoose = require("mongoose");

let categorySchema = new mongoose.Schema({});

module.exports = mongoose.model("Category", categorySchema);
