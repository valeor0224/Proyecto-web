import React from "react";
import { NavLink } from "react-router-dom";
import './Adopcion.css';
import personaLogo from "../../../assets/img/person-adoption.png";
import formLogo from "../../../assets/img/formulario-home-procesoadopcion.png";
import mascotaLogo from "../../../assets/img/mascota-home-procesoadopcion.png";
import respuestaLogo from "../../../assets/img/respuesta-home-procesoadopcion.png";
//src/assets/img/person-adoption.png
//src/pages/Home/Adopcion/Adopcion.jsx

const Adopcion = () => {

    return (
        <div className="adopcion-proceso">

            <div className="texto-adopcion">
                <span className="texto-adopcion-titulo">Proceso de adopción</span>
                <span className="texto-adopcion-info">Ayúdanos a darle una nueva familia y un nuevo hogar a estos animales.</span>
            </div>
            <div className="proceso">
                <div className="paso">
                    <img src={personaLogo} alt="logo persona" />
                    <span className="text-proceso">Crea tu cuenta</span>
                </div>
                <div className="paso">
                    <img src={mascotaLogo} alt="logo form" />
                    <span className="text-proceso">Escoge a tu felino preferido</span>

                </div>
                <div className="paso">
                    <img src={formLogo} alt="logo mascota" />
                    <span className="text-proceso">Completa el formulario de adopción</span>

                </div>
                <div className="paso">
                    <img src={respuestaLogo} alt="logo respuesta" />
                    <span className="text-proceso">Espera la respuesta por parte del refugio</span>


                </div>

            </div>

        </div>






    );

};


export default Adopcion