let register = async (req, res, next) => {
      res.send("register User");
};

let login = async (req, res, next) => {
      res.send("login User");
};

let logout = async (req, res, next) => {
      res.send("logout User");
};

module.exports = {
      register,
      login,
      logout,
};
