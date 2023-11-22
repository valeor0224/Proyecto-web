import React from 'react';
import { NavLink } from 'react-router-dom';
import './EventosCard.css';
import locationLogo from "../../assets/img/location.png";

  const EventosCard = () => {
   
    return (
      <div className="eventos-card-container">
        <div className='cuadro-fecha'>
          <span>24 Oct</span>

        </div>
        <div className='cuadro-informacion'>
            <span>Nom evento</span>
            <div className='ubicacion'>
            <img src={locationLogo} alt="location" />
                <span>San Salvador, San Salvador</span>
            </div>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. nobis exercitationem.</span>

            <button>
                MÁS DETALLES
            </button>
        </div>
      </div>
    );
  };
  
  

export default EventosCard