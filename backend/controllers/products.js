const { Product } = require("../models");
const { StatusCodes } = require("http-status-codes");

let getSearchedProducts = async (req, res, next) => {
      let {
            name,
            category,
            featured,
            company,
            sort,
            fields,
            limit,
            page,
            numericFilters,
      } = req.query;

      let queryObject = {};

      if (numericFilters) {
            let regEx = /\b(<|>|>=|=|<|<=)\b/g;
            let operatorMap = {
                  "=": "$eq",
                  "<": "$lt",
                  ">": "$gt",
                  "<=": "$lte",
                  ">=": "$gte",
            };
            let options = ["sale_price", "rating"];
            numericFilters = numericFilters.replace(
                  regEx,
                  (match) => `-${operatorMap[match]}-`
            );
            numericFilters = numericFilters.trim().split(",");
            numericFilters.forEach((item) => {
                  const [field, operator, value] = item.split("-");
                  if (options.includes(field)) {
                        queryObject[field] = {
                              [operator]: Number(value),
                        };
                  }
            });
      }

      if (name) {
            queryObject.$or = [
                  { name: { $regex: name, $options: "i" } },
                  { description: { $regex: `/${name}/`, $options: "i" } },
            ];
      }

      if (category) {
            queryObject.category = category;
      }

      if (company) {
            queryObject.company = company;
      }

      if (featured) {
            queryObject.featured = featured;
      }

      if (sort) {
            sort = sort.trim();
            sort = sort.split(",").join(" ");
      } else {
            sort = "createdAt";
      }

      if (fields) {
            fields = fields.trim();
            fields = fields.split(",").join(" ");
      }

      limit = Number(limit) || 10;
      page = Number(page) || 1;
      let skip = (page - 1) * limit;

      console.log(queryObject);

      let products = await Product.find(queryObject)
            .sort(sort)
            .select(fields)
            .skip(skip)
            .limit(limit);
      res.status(200).json(products);
};

let getAllProducts = async (req, res, next) => {
      let products = await Product.find({});
      res.status(StatusCodes.OK).json(products);
};

let createProduct = async (req, res, next) => {
      let product = await Product.create(req.body);
      res.status(StatusCodes.CREATED).json(product);
};

let getProduct = async (req, res, next) => {
      let { id } = req.params;
      let product = await Product.findById(id);
      res.status(StatusCodes.OK).json(product);
};

let updateProduct = async (req, res, next) => {
      let { id } = req.params;
      let product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
      });
      res.status(StatusCodes.OK).json(product);
};

let deleteProduct = async (req, res, next) => {
      let { id } = req.params;
      let product = await Product.findByIdAndDelete(id);
      res.status(StatusCodes.OK).json(product);
};

module.exports = {
      getAllProducts,
      createProduct,
      getProduct,
      updateProduct,
      deleteProduct,
      getSearchedProducts,
};
