const Company = require('../models/company');

// Get All Companies
exports.getAllCompanies = async (req, res) => {
  const companies = await Company.findAll();
  res.json(companies);
};

// Add Company
exports.addCompany = async (req, res) => {
  const newCompany = await Company.create(req.body);
  res.json(newCompany);
};
