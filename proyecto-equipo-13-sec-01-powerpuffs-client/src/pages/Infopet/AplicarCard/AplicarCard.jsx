import React, { useState } from 'react';
import './AplicarCard.css';

function AplicarCard({ gatoImage, nameCat }) {

  const handleAdoptionClick = () => {
    // Redirect to the AdoptionForm and pass the data as query params
    window.location.href = `/AdoptionForm/${encodeURIComponent(gatoImage)}/${encodeURIComponent(nameCat)}`;

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
