let getAllProducts = async (req, res, next) => {
      res.send("all products");
};

let createProduct = async (req, res, next) => {
      res.send("create product");
};

let getProduct = async (req, res, next) => {
      res.send("get single product");
};

let updateProduct = async (req, res, next) => {
      res.send("update product");
};

let deleteProduct = async (req, res, next) => {
      res.send("delete product");
};

let getSearchedProducts = async (req, res, next) => {
      res.send("get searched products");
};

module.exports = {
      getAllProducts,
      createProduct,
      getProduct,
      updateProduct,
      deleteProduct,
      getSearchedProducts,
};
