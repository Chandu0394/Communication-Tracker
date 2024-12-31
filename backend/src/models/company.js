const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  location: String,
  linkedIn: String,
  emails: String,
  phoneNumbers: String,
  comments: String,
  communicationPeriodicity: String,
  date: String,
});

module.exports = mongoose.model('Company', companySchema);
