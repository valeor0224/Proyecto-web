import React, { useState } from 'react';
import './DisplayAdopAdmin.css';
import { user as userData } from '../../components/initial-data';
import AdopcionAdminCard from '../cards/AdopcionAdminCard/AdopcionAdminCard';

const DisplayAdopAdmin = ({ data, onClose }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="DisplayAdopAdmin">
      <h2>DisplayAdopAdmin</h2>
      <p>Name: {data.nombre}</p>
      <p>Submission date: {data.submissionDate}</p>
      {/* Add more details based on your data structure */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DisplayAdopAdmin;