import React from 'react';
import { NavLink } from 'react-router-dom';
import './EscogeMascota.css';
import ImageSlider from '../../../cards/ImageSlider/ImageSlider';



const EscogeMascota = () => {
  return (
    <div className='contenedor-escoger'>
      <div className='Texto'>
        <span>Gatos listos para encontrar un hogar</span>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ad ut id, amet consectetur non labore nulla incidunt molestiae veniam excepturi, quam repellendus odio vero minima adipisci odit nobis exercitationem.</span>
        
      </div>
      <div className='Imagenes-Gatos'>
      <ImageSlider />

      </div>
      <div className='Mas-Info'>
        <span>Escoge tu mascota</span>
        <button>MÁS INFORMACIÓN</button>
      </div>


    </div>
  );
};

export default EscogeMascota;
