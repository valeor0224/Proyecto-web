import React from 'react';
import patitasLogo from '../../../assets/img/patita-logo.svg';
import { NavLink } from 'react-router-dom';
import './Ayudar.css';

const Ayudar = () => {
    return (
        <div className='Contenedor-Ayuda'>


            <span className='Contenedor-Ayuda-title'>¡Conviértete en patrocinador del refugio!</span>
            <span className='Contenedor-Ayuda-subtitle'>
                ¿No puedes adoptar ninguna mascota, pero aún quieres ayudar al refugio? También puedes brindarnos tu ayuda económicamente.
            </span>

            <button>MÁS DETALLES</button>

        </div>


    );
};

export default Ayudar;
