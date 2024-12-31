import React, { useState, useEffect } from 'react';

const CompanyForm = ({ company, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    linkedIn: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: '',
    pastDates: [],
    futureDates: [],
    todayDate: '',
  });

  useEffect(() => {
    if (company) {
      setFormData({
        name: company.name || '',
        location: company.location || '',
        linkedIn: company.linkedIn || '',
        emails: company.emails || '',
        phoneNumbers: company.phoneNumbers || '',
        comments: company.comments || '',
        communicationPeriodicity: company.communicationPeriodicity || '',
        pastDates: company.pastDates || [],
        futureDates: company.futureDates || [],
        todayDate: company.todayDate || '',
      });
    }
  }, [company]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass formData back to parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Company Details</h3>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>LinkedIn</label>
        <input
          type="text"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="emails"
          value={formData.emails}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone Numbers</label>
        <input
          type="text"
          name="phoneNumbers"
          value={formData.phoneNumbers}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Communication Periodicity</label>
        <input
          type="text"
          name="communicationPeriodicity"
          value={formData.communicationPeriodicity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Past Communication Dates</label>
        <textarea
          name="pastDates"
          value={formData.pastDates.join(', ')}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Future Communication Dates</label>
        <textarea
          name="futureDates"
          value={formData.futureDates.join(', ')}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Today's Date</label>
        <input
          type="date"
          name="todayDate"
          value={formData.todayDate.split('T')[0]} // Extract the date part
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default CompanyForm;
