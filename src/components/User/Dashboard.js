import React, { useState, useEffect } from 'react';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [communicationData, setCommunicationData] = useState({
    type: '',
    date: '',
    notes: '',
  });

  useEffect(() => {
    // Fetch companies data from the public folder
    fetch('/companies.json')
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data.companies);
      })
      .catch((error) => {
        console.error('Error fetching companies data:', error);
      });
  }, []);

  const handleCommunicationPerformed = () => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        selectedCompanies.includes(company.name)
          ? { ...company, status: 'green' }
          : company
      )
    );
    setSelectedCompanies([]);
    setShowModal(false);
  };

  const handleCheckboxChange = (companyName) => {
    setSelectedCompanies((prevState) => {
      if (prevState.includes(companyName)) {
        return prevState.filter((name) => name !== companyName);
      }
      return [...prevState, companyName];
    });
  };

  const handleTakeAction = (company) => {
    window.open(company.linkedIn, '_blank');
  };

  const redirectToUserDashboard = () => {
    window.location.href = '/user-dashboard';
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="dashboard-container">
      <div className="nav-buttons">
        <button onClick={redirectToUserDashboard}>Dashboard</button>
        <button>Notifications</button>
        <button onClick={() => setShowModal(true)}>Calendar View</button>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {/* Notifications Section */}
      <div className="notifications">
        <div className="notification-grid">
          <div className="grid-item">
            <h3>Overdue Communications</h3>
            {companies
              .filter(
                (company) =>
                  new Date(company.nextScheduledCommunicationDate) <
                  new Date(today) &&
                  company.status !== 'green'
              )
              .map((company, index) => (
                <div key={index} className="red-notification">
                  {company.name} - Overdue
                </div>
              ))}
          </div>
          <div className="grid-item">
            <h3>Today's Communications</h3>
            {companies
              .filter(
                (company) =>
                  company.nextScheduledCommunicationDate.split('T')[0] ===
                  today &&
                  company.status !== 'green'
              )
              .map((company, index) => (
                <div key={index} className="yellow-notification">
                  {company.name} - Due Today
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="company-grid">
        {companies.map((company) => {
          let cardClass = '';
          if (company.status === 'green') {
            cardClass = 'green';
          } else if (new Date(company.nextScheduledCommunicationDate) < new Date(today)) {
            cardClass = 'red';
          } else if (company.nextScheduledCommunicationDate.split('T')[0] === today) {
            cardClass = 'yellow';
          }

          return (
            <div
              key={company.name}
              className={`company-card ${
                selectedCompanies.includes(company.name) ? 'selected' : ''
              } ${cardClass}`}
              onMouseEnter={() => {
                setCompanies((prevCompanies) =>
                  prevCompanies.map((c) =>
                    c.name === company.name ? { ...c, hover: true } : c
                  )
                );
              }}
              onMouseLeave={() => {
                setCompanies((prevCompanies) =>
                  prevCompanies.map((c) => ({ ...c, hover: false }))
                );
              }}
            >
              <h3>{company.name}</h3>
              <p className="next-scheduled-communication">
                Next Communication: {new Date(company.nextScheduledCommunicationDate).toLocaleDateString()}
              </p>
              <div className="full-info">
                <p><strong>Location:</strong> {company.location}</p>
                <p><strong>LinkedIn:</strong> <a href={company.linkedIn} target="_blank" rel="noopener noreferrer">Profile</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${company.emails}`}>{company.emails}</a></p>
                <p><strong>Phone:</strong> {company.phoneNumbers}</p>
                <p><strong>Comments:</strong> {company.comments}</p>
                <p><strong>Communication Periodicity:</strong> {company.communicationPeriodicity}</p>
                <p><strong>Past Communications:</strong></p>
                <ul>
                  {company.pastCommunications.map((date, index) => (
                    <li key={index}>{new Date(date).toLocaleString()}</li>
                  ))}
                </ul>
              </div>
              <input
                type="checkbox"
                checked={selectedCompanies.includes(company.name)}
                onChange={() => handleCheckboxChange(company.name)}
              />
              <button onClick={() => handleTakeAction(company)}>Take Action</button>
            </div>
          );
        })}
      </div>

      {/* Communication Performed Button */}
      {selectedCompanies.length > 0 && (
        <button className="communication-button" onClick={handleCommunicationPerformed}>
          Communication Performed
        </button>
      )}

      {/* Modal for Calendar View */}
      {showModal && (
        <div className="modal-overlay">
          <div className="calendar-modal">
            <h3>Communication Log</h3>
            <label>Type of Communication</label>
            <input
              type="text"
              value={communicationData.type}
              onChange={(e) =>
                setCommunicationData({ ...communicationData, type: e.target.value })
              }
            />
            <label>Date</label>
            <input
              type="date"
              value={communicationData.date}
              onChange={(e) =>
                setCommunicationData({ ...communicationData, date: e.target.value })
              }
            />
            <label>Notes</label>
            <textarea
              value={communicationData.notes}
              onChange={(e) =>
                setCommunicationData({ ...communicationData, notes: e.target.value })
              }
            />
            <button onClick={handleCommunicationPerformed}>Save</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;