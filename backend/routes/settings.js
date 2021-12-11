const express = require("express");
const authenticate = require("../middleware/authenticate");

const { getSettings, updateSettings } = require("../controllers");

let settingsRouter = express.Router();

settingsRouter.route("/").get(getSettings);

settingsRouter.route("/:id").patch(authenticate, updateSettings);

module.exports = settingsRouter;
