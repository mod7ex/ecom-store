let getAllUsers = async (req, res, next) => {
      res.send("all Users");
};

let createUser = async (req, res, next) => {
      res.send("create User");
};

let getUser = async (req, res, next) => {
      res.send("get single User");
};

let updateUser = async (req, res, next) => {
      res.send("update User");
};

let deleteUser = async (req, res, next) => {
      res.send("delete User");
};

module.exports = {
      getAllUsers,
      createUser,
      getUser,
      updateUser,
      deleteUser,
};
