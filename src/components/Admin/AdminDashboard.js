import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for HTTP requests
import "../../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [showContent, setShowContent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    linkedIn: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    communicationPeriodicity: "",
    date: "",
  });
  const [companies, setCompanies] = useState([]);
  const [methods, setMethods] = useState([]); // Start with an empty array
  const [newMethod, setNewMethod] = useState({
    name: "",
    description: "",
    sequence: "",
  });

  const navigate = useNavigate();

  // Fetch the companies and methods from backend API
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/companies");
        setCompanies(response.data); // Set companies from the response
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    const fetchMethods = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/communicationmethods");
        setMethods(response.data); // Set methods from the response
      } catch (error) {
        console.error("Error fetching communication methods:", error);
      }
    };

    fetchCompanies();
    fetchMethods();
  }, []);

  const handleLogout = () => {
    navigate("/"); // Navigate to Login page
  };

  const handleShowCompanyForm = () => {
    setShowContent("company");
  };

  const handleShowCommunicationForm = () => {
    setShowContent("communication");
  };

  const handleShowExistingMethods = () => {
    setShowContent("existingMethods");
  };

  const handleShowAssignedTasks = () => {
    setShowContent("tasks");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to send data to backend API
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/companies", formData);
      console.log(response.data); // Log the response from the server

      const newCompany = { ...formData, id: companies.length + 1, date: new Date().toLocaleDateString() };
      const updatedCompanies = [...companies, newCompany];
      setCompanies(updatedCompanies);

      setFormData({
        name: "",
        location: "",
        linkedIn: "",
        emails: "",
        phoneNumbers: "",
        comments: "",
        communicationPeriodicity: "",
        date: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Delete company from backend API and state
  const handleDeleteCompany = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/companies/${id}`);
      setCompanies(companies.filter((company) => company.id !== id)); // Update state after deletion
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  // Modify company details
  const handleModifyCompany = (company) => {
    setFormData(company); // Populate the form with the company's current details
    setShowContent("company"); // Show the company form for editing
  };

  const handleNewMethodChange = (e) => {
    const { name, value } = e.target;
    setNewMethod((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddMethod = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/communicationmethods", newMethod);
      console.log(response.data); // Log the response from the server

      const updatedMethods = [
        ...methods,
        {
          id: methods.length + 1,
          name: newMethod.name,
          description: newMethod.description,
          sequence: newMethod.sequence,
        },
      ];
      setMethods(updatedMethods);

      setNewMethod({
        name: "",
        description: "",
        sequence: "LinkedIn Post",
      });
    } catch (error) {
      console.error("Error adding communication method:", error);
    }
  };

  const handleDeleteMethod = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/communicationmethods/${id}`);
      const updatedMethods = methods.filter((method) => method.id !== id);
      setMethods(updatedMethods);
    } catch (error) {
      console.error("Error deleting communication method:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-sidebar">
        <h3>Admin Dashboard</h3>
        <ul className="nav-links">
          <li onClick={handleShowCompanyForm}>Add Company</li>
          <li onClick={() => setShowContent("manageCompanies")}>Manage Existing Companies</li>
          <li onClick={handleShowCommunicationForm}>Add Communication Method</li>
          <li onClick={handleShowExistingMethods}>Existing Methods</li>
          <li onClick={handleShowAssignedTasks}>Assigned Tasks</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      <div className="dashboard-content">
        {showContent === "company" && (
          <div className="content-section">
            <h4>{formData.id ? "Modify Company" : "Add New Company"}</h4>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Company Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="linkedIn">LinkedIn Profile:</label>
                <input
                  type="url"
                  id="linkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="emails">Emails:</label>
                <input
                  type="email"
                  id="emails"
                  name="emails"
                  value={formData.emails}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumbers">Phone Numbers:</label>
                <input
                  type="text"
                  id="phoneNumbers"
                  name="phoneNumbers"
                  value={formData.phoneNumbers}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comments:</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="communicationPeriodicity">Communication Periodicity:</label>
                <input
                  type="text"
                  id="communicationPeriodicity"
                  name="communicationPeriodicity"
                  value={formData.communicationPeriodicity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="button">Submit</button>
            </form>
          </div>
        )}

        {showContent === "manageCompanies" && (
          <div className="content-section">
            <h4>Manage Existing Companies</h4>
            <table className="companies-table">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Location</th>
                  <th>LinkedIn</th>
                  <th>Emails</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.location}</td>
                    <td>{company.linkedIn}</td>
                    <td>{company.emails}</td>
                    <td>
                      <button onClick={() => handleModifyCompany(company)}>Edit</button>
                      <button onClick={() => handleDeleteCompany(company.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showContent === "communication" && (
          <div className="content-section">
            <h4>Add New Communication Method</h4>
            <form onSubmit={handleAddMethod}>
              <div className="form-group">
                <label htmlFor="name">Method Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newMethod.name}
                  onChange={handleNewMethodChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={newMethod.description}
                  onChange={handleNewMethodChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="sequence">Sequence:</label>
                <input
                  type="text"
                  id="sequence"
                  name="sequence"
                  value={newMethod.sequence}
                  onChange={handleNewMethodChange}
                  required
                />
              </div>
              <button type="submit" className="button">Add Method</button>
            </form>
          </div>
        )}

        {showContent === "existingMethods" && (
          <div className="content-section">
            <h4>Existing Communication Methods</h4>
            <table className="methods-table">
              <thead>
                <tr>
                  <th>Method Name</th>
                  <th>Description</th>
                  <th>Sequence</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((method) => (
                  <tr key={method.id}>
                    <td>{method.name}</td>
                    <td>{method.description}</td>
                    <td>{method.sequence}</td>
                    <td>
                      <button onClick={() => handleDeleteMethod(method.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showContent === "tasks" && (
          <div className="content-section">
            <h4>Assigned Tasks</h4>
            <p>No tasks assigned yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
