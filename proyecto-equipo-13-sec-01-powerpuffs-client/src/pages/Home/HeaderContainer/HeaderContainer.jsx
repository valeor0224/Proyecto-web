import React from 'react';
import patitasLogo from '../../../assets/img/patita-logo.svg';
import { NavLink } from 'react-router-dom';
import './HeaderContainer.css';
import { useUserContext } from '../../../UserContext';

const HeaderContainer = () => {
  const { user2 } = useUserContext();

  if (user2?.roleId === '1' || user2?.roleId === '2') {
    return (
      <div className='contenedor-gato-home'>
        <div className='contenido'>
          <div className="header-logo-container">
            <img src={patitasLogo} alt="Patitas Seguras" />
            <span>Patitas Seguras</span>
          </div>

          <p>
            Nada se compara con saber que un animalito estará viviendo en un hogar con una familia, con el amor, cuidado y respeto que se merece. Ayúdanos a lograr esto, ¡adopta!
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className='contenedor-gato-home'>
      <div className='contenido'>
        <div className="header-logo-container">
          <img src={patitasLogo} alt="Patitas Seguras" />
          <span>Patitas Seguras</span>
        </div>

        <p>
          Nada se compara con saber que un animalito estará viviendo en un hogar con una familia, con el amor, cuidado y respeto que se merece. Ayúdanos a lograr esto, ¡adopta!
        </p>

        <button>ADOPTAR</button>

      </div>
    </div>
  );
};

export default HeaderContainer;

