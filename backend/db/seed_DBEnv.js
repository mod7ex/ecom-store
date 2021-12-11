const Settings = require("../models/Settings");
const ShippingClass = require("../models/shipping/ShippingClass");

let seed_DBEnv = async () => {
      await Settings.create({});

      await ShippingClass.create({
            name: "No shipping class",
            slug: "no_shipping_class",
      });
};

seed_DBEnv();
