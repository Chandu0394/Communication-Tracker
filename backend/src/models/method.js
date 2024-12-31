const mongoose = require('mongoose');

const methodSchema = new mongoose.Schema({
  name: String,
  description: String,
  sequence: String,
});

module.exports = mongoose.model('Method', methodSchema);
