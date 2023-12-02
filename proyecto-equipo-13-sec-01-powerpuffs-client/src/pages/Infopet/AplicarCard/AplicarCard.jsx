import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AplicarCard.css';
import { useUserContext } from '../../../UserContext';

function AplicarCard({ gatoImage, nameCat }) {
  const { user2 } = useUserContext(); 
  const navigate = useNavigate();
  
  const handleAdoptionClick = () => {
     // Check if the user is logged in before redirecting to AdoptionForm
     if (user2) {
      // If logged in, navigate to the AdoptionForm and pass the data as query params
      navigate(`/AdoptionForm/${encodeURIComponent(gatoImage)}/${encodeURIComponent(nameCat)}`);
    } else {
      // If not logged in, navigate to the login page
      navigate('/login');
    }

  };

  return (
    <>
      <div className="aplicar-card">
        <h2>
          ¿Te interesa hacer a nomgato parte de tu familia?
        </h2>
        <h1>
          ¡Comienza <span>ya</span> el proceso de adopción completando el formulario!
        </h1>
        <button className='Aplicar-adopcion' onClick={handleAdoptionClick}>
          APLICAR PARA SU ADOPCIÓN
        </button>
      </div>
    </>
  );
}

export default AplicarCard;
