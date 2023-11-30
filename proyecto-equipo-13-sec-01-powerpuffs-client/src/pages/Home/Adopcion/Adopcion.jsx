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
                <h1>Proceso de adopción</h1>
                <h2>Ayúdanos a darle una nueva familia y un nuevo hogar a estos animales.</h2>
            </div>
            <div className="proceso">
                <div className="paso">
                    <img src={personaLogo} alt="logo persona" />
                    <p className="text-proceso">Crea tu cuenta</p>
                </div>
                <div className="paso">
                    <img src={mascotaLogo} alt="logo form" />
                    <p>Escoge a tu felino preferido</p>

                </div>
                <div className="paso">
                    <img src={formLogo} alt="logo mascota" />
                    <p>Completa el formulario de adopción</p>

                </div>
                <div className="paso">
                    <img src={respuestaLogo} alt="logo respuesta" />
                    <p>Espera la respuesta por parte del refugio</p>


                </div>

            </div>

        </div>






    );

};


export default Adopcion