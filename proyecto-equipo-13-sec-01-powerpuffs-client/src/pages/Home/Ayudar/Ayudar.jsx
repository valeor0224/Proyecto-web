import React from 'react';
import patitasLogo from '../../../assets/img/patita-logo.svg';
import { NavLink } from 'react-router-dom';
import './Ayudar.css';

const Ayudar = () => {
    return (
        <div className='Contenedor-Ayuda'>

            <div className='Contenedor-Ayuda-text'>
                <h1>¡Conviértete en patrocinador del refugio!</h1>
                <h3>
                    ¿No puedes adoptar ninguna mascota, pero aún quieres ayudar al refugio? También puedes brindarnos tu ayuda económicamente.
                </h3>

                <button>MÁS DETALLES</button>
            </div>


        </div>


    );
};

export default Ayudar;
