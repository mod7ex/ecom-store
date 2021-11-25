const express = require("express");
const authenticate = require("../middleware/authenticate");

const {
      getAllCompanies,
      createCompany,
      getCompany,
      updateCompany,
      deleteCompany,
} = require("../controllers");

let companiesRouter = express.Router();

companiesRouter
      .route("/")
      .get(getAllCompanies)
      .post(authenticate, createCompany);
companiesRouter
      .route("/:id")
      .get(getCompany)
      .patch(authenticate, updateCompany)
      .delete(authenticate, deleteCompany);

module.exports = companiesRouter;
