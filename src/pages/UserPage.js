import React, { useEffect, useState } from "react";
import axios from "axios";

const UserPage = () => {
  const [communications, setCommunications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user");
        setCommunications(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-page">
      <h2>User Module</h2>
      <ul>
        {communications.map((comm, index) => (
          <li key={index}>{comm}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
