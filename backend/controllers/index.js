const {
      getAllProducts,
      createProduct,
      getProduct,
      updateProduct,
      deleteProduct,
      getSearchedProducts,
} = require("./products");

const {
      getAllUsers,
      createUser,
      getUser,
      updateUser,
      deleteUser,
} = require("./users");

const { register, login, logout } = require("./auth");

module.exports = {
      getAllProducts,
      createProduct,
      getProduct,
      updateProduct,
      deleteProduct,
      getSearchedProducts,
      getAllUsers,
      createUser,
      getUser,
      updateUser,
      deleteUser,
      register,
      login,
      logout,
};
