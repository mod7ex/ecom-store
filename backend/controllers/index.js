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

const {
      getAllCompanies,
      createCompany,
      getCompany,
      updateCompany,
      deleteCompany,
} = require("./companies");

const {
      getAllReviews,
      getAllProductReviews,
      createReview,
      getReview,
      updateReview,
      deleteReview,
} = require("./reviews");

const { getSettings, updateSettings } = require("./settings");

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

      getAllCompanies,
      createCompany,
      getCompany,
      updateCompany,
      deleteCompany,

      getAllReviews,
      getAllProductReviews,
      createReview,
      getReview,
      updateReview,
      deleteReview,

      getSettings,
      updateSettings,
};
