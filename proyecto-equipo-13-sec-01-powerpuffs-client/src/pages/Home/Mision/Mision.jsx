import React from 'react';
import patitasLogo from '../../../assets/img/patita-logo.svg';
import { NavLink } from 'react-router-dom';
import './Mision.css';

const Mision = () => {
    return (
        <div className='contenedor-mision'>
            <span className='mision-title'>Nuestra misión</span>
            <div className='columns-mision'>
                <div className='column-mision'>
                    <span className='mision-subtitulo'>LO QUE HACEMOS</span>
                    <span className='mision-parrafo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ad ut id, amet consectetur non labore nulla incidunt molestiae veniam excepturi, quam repellendus odio vero minima adipisci odit nobis exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ad ut id, amet consectetur non labore nulla incidunt molestiae veniam excepturi, quam repellendus odio vero minima adipisci odit nobis exercitationem.</span>
                </div>


                <div className='column-mision'>
                    <span className='mision-subtitulo'>LO QUE QUEREMOS</span>
                    <span className='mision-parrafo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ad ut id, amet consectetur non labore nulla incidunt molestiae veniam excepturi, quam repellendus odio vero minima adipisci odit nobis exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ad ut id, amet consectetur non labore nulla incidunt molestiae veniam excepturi, quam repellendus odio vero minima adipisci odit nobis exercitationem.</span>
                </div>

            </div>



        </div>
    );
};

export default Mision;
