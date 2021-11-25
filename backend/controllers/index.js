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

const {
      getAllCategories,
      createCategory,
      getCategory,
      updateCategory,
      deleteCategory,
} = require("./categories");

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
      getAllCategories,
      createCategory,
      getCategory,
      updateCategory,
      deleteCategory,
};
