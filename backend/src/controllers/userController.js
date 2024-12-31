const Company = require('../models/Company');

// Fetch dashboard data
exports.getDashboardData = async (req, res) => {
    try {
        const companies = await Company.find().populate('communications');
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch dashboard data', error });
    }
};
