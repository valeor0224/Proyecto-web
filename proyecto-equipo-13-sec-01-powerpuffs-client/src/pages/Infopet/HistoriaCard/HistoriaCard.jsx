// HistoriaCard.js

import React, { useState } from 'react';
import './HistoriaCard.css';

const HistoriaCard = ({ ageCat, sexCat, colorCat }) => {
    const [actividadPercentage, setActividadPercentage] = useState(90);
    const [afectoPercentage, setAfectoPercentage] = useState(70);
    const [socialPercentage, setSocialPercentage] = useState(50);
    const [territorialPercentage, setTerritorialPercentage] = useState(30);

    const updateProgress = () => {
        setActividadPercentage(Math.floor(Math.random() * 100));
        setAfectoPercentage(Math.floor(Math.random() * 100));
        setSocialPercentage(Math.floor(Math.random() * 100));
        setTerritorialPercentage(Math.floor(Math.random() * 100));
    };

    return (
        <div className="historia-container">
            <div className='historia-text'>
                <h1>
                    Historia
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ad ut id, amet consectetur non labore nulla incidunt molestiae veniam excepturi, quam repellendus odio vero minima adipisci odit nobis exercitationem.
                </p>

                <div className='edad-gato'>
                    <p>Edad: {ageCat}</p>
                </div>

                <div className='sexo-gato'>
                    <p>Sexo: {sexCat}</p>
                </div>

                <div className='color-gato'>
                    <p>Color: {colorCat}</p>
                </div>
            </div>
            <div className='barras-porcentaje'>
                <label htmlFor="actividad">Activo y juguetón</label>
                <progress id="actividad" value={actividadPercentage} max="100">
                    {actividadPercentage}%
                </progress>
                <label htmlFor="afecto">Afectuoso</label>
                <progress id="afecto" value={afectoPercentage} max="100">
                    {afectoPercentage}%
                </progress>
                <label htmlFor="social">Social y extrovertido</label>
                <progress id="social" value={socialPercentage} max="100">
                    {socialPercentage}%
                </progress>
                <label htmlFor="territorial">Territorial</label>
                <progress id="territorial" value={territorialPercentage} max="100">
                    {territorialPercentage}%
                </progress>
                <button onClick={updateProgress}>Update Progress</button>
            </div>
        </div>
    );
};

export default HistoriaCard;
