const { Company } = require("../models");
const { StatusCodes } = require("http-status-codes");

let getAllCompanies = async (req, res, next) => {
      let companies = await Company.find({});
      res.status(StatusCodes.OK).json(companies);
};

let createCompany = async (req, res, next) => {
      let company = await Company.create(req.body);
      res.status(StatusCodes.CREATED).json(company);
};

let getCompany = async (req, res, next) => {
      let { id } = req.params;
      let company = await Company.findById(id);
      res.status(StatusCodes.OK).json(company);
};

let updateCompany = async (req, res, next) => {
      let { id } = req.params;
      let company = await Company.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
      });
      res.status(StatusCodes.OK).json(company);
};

let deleteCompany = async (req, res, next) => {
      let { id } = req.params;
      let company = await Company.findByIdAndDelete(id);
      res.status(StatusCodes.OK).json(company);
};

module.exports = {
      getAllCompanies,
      createCompany,
      getCompany,
      updateCompany,
      deleteCompany,
};
