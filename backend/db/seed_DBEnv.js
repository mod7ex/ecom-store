const Settings = require("../models/Settings");

let seed_DBEnv = async () => {
      await Settings.create({});
};

seed_DBEnv();
