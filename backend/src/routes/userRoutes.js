const express = require('express');
const { getDashboardData } = require('../controllers/userController');
const router = express.Router();

router.get('/dashboard', getDashboardData);

module.exports = router;
