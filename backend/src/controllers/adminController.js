import Company, { find } from '../models/Company';
// eslint-disable-next-line no-unused-vars
import Communication from '../models/Communication';

// Add a new company
export async function addCompany(req, res) {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json({ message: 'Company added successfully', company });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add company', error });
    }
}

// Fetch all companies
export async function getCompanies(req, res) {
    try {
        const companies = await find().populate('communications');
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch companies', error });
    }
}
