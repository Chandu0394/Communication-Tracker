import React, { useState } from 'react';

const CommunicationMethod = ({ method, onSave }) => {
  const [methodData, setMethodData] = useState({
    name: '',
    description: '',
    sequence: 1,
    mandatory: false,
    ...method, // Pre-fill with existing data if provided
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMethodData({
      ...methodData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(methodData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{method ? 'Edit Communication Method' : 'Add New Communication Method'}</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={methodData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={methodData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Sequence:
        <input
          type="number"
          name="sequence"
          value={methodData.sequence}
          onChange={handleChange}
        />
      </label>
      <label>
        Mandatory:
        <input
          type="checkbox"
          name="mandatory"
          checked={methodData.mandatory}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default CommunicationMethod;
