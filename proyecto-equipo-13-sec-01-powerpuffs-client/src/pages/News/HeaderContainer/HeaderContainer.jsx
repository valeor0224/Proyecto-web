import React from 'react';
import patitasLogo from '../../../assets/img/patita-logo.svg';
import { NavLink } from 'react-router-dom';
import './HeaderContainer.css';

const HeaderContainer = () => {
  return (
    <div className='contenedor-gato'>
      <div className='contenido'>
        <h1>Noticias</h1>
        <p>
          Nada se compara con saber que un animalito estará viviendo en un hogar con una familia, con el amor, cuidado y respeto que se merece. Ayúdanos a lograr esto, ¡adopta!
        </p>
      </div>
    </div>
  );
};

export default HeaderContainer;
