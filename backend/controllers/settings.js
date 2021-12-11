const { Settings } = require("../models");
const { StatusCodes } = require("http-status-codes");

let getSettings = async (req, res, next) => {
      let settings = await Settings.findOne({});
      res.status(StatusCodes.OK).json(settings);
};

let updateSettings = async (req, res, next) => {
      let { id } = req.params;
      let settings = await Settings.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
      });
      res.status(StatusCodes.OK).json(settings);
};

module.exports = {
      getSettings,
      updateSettings,
};
