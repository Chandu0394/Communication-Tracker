const express = require('express');
const { addCompany, getCompanies } = require('../controllers/adminController');
const router = express.Router();

router.post('/companies', addCompany);
router.get('/companies', getCompanies);

module.exports = router;
