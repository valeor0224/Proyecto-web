import React from 'react';
import './AdopcionAdminCard.css';
import { formSubmissions } from '../../initial-data';

function AdopcionAdminCard() {
  return (
    <div className="AdopcionAdmin-Container">
      {formSubmissions.map((submission, index) => (
        <div key={index} className="AdopcionAdmin-Card">
          <p>Name: {submission.nombre}</p>
          <p>Submission date: {submission.submissionDate}</p>
          <button className='envelop-adopcion-admin'>
            Open
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdopcionAdminCard;
