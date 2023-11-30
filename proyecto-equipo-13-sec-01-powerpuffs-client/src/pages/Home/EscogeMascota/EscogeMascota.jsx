import React from 'react';
import { NavLink } from 'react-router-dom';
import './EscogeMascota.css';
import ImageSlider from "../../../components/cards/ImageSlider/ImageSlider";


const EscogeMascota = () => {
  return (
    <div className='contenedor-escoger'>
      <div className='Texto-escoger-mascota'>
        <h1>Gatos listos para encontrar un hogar</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ad ut id, amet consectetur non labore nulla incidunt molestiae veniam excepturi, quam repellendus odio vero minima adipisci odit nobis exercitationem.</p>
        
      </div>
      <div className='Imagenes-Gatos'>
      <ImageSlider />

      </div>
      <div className='Mas-Info-escoger-mascota'>
        <h2>Escoge tu mascota</h2>
        <button>MÁS INFORMACIÓN</button>
      </div>


    </div>
  );
};

export default EscogeMascota;
