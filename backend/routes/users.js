const express = require("express");
const {
      getAllUsers,
      createUser,
      getUser,
      updateUser,
      deleteUser,
} = require("../controllers");

let usersRouter = express.Router();

usersRouter.route("/").get(getAllUsers).post(createUser);
usersRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = usersRouter;
