import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies } from '../../redux/slices/companySlice';

const CompanyList = () => {
    const dispatch = useDispatch();
    const { companies, loading } = useSelector((state) => state.companies);

    useEffect(() => {
        dispatch(getCompanies());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Company List</h2>
            <ul>
                {companies.map((company) => (
                    <li key={company._id}>{company.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyList;
