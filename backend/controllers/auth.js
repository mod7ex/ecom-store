let register = async (req, res, next) => {
      res.send("register User");
};

let login = async (req, res, next) => {
      res.send("create User");
};

let logout = async (req, res, next) => {
      res.send("create User");
};

module.exports = {
      register,
      login,
      logout,
};
