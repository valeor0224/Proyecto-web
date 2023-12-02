import React, { useState } from 'react';
import './AdopcionAdminCard.css';
import { formSubmissions } from '../../initial-data';
import DisplayAdopAdmin from '../../DisplayAdopAdmin/DisplayAdopAdmin';
import envelopelogo from '../../../assets/img/envelope-gray.svg';

function AdopcionAdminCard() {
  const [selectedData, setSelectedData] = useState(null);

  const handleOpenButtonClick = (data) => {
    setSelectedData(data);
  };

  return (
    <div className="AdopcionAdmin-Container">
      <div className='container-cards-adop'>
        {formSubmissions.map((submission, index) => (
          <div key={index} className="AdopcionAdmin-Card">
            <p>Name: {submission.nombre}</p>
            <p>Submission date: {submission.submissionDate}</p>
            <button
              className='envelop-adopcion-admin'
              onClick={() => handleOpenButtonClick(submission)}
            >
             <img src={envelopelogo} alt="delete-logo"/> 
            </button>
          </div>
        ))}

      </div>

      <div className='displayadopadmin-container'>
        {/* Display DisplayAdopAdmin when selectedData is available */}
        {selectedData && (
          <DisplayAdopAdmin data={selectedData} onClose={() => setSelectedData(null)} />
        )}

      </div>

    </div>
  );
}

export default AdopcionAdminCard;
