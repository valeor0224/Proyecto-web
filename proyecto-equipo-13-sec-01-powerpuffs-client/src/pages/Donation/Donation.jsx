import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './Donation.css';

function Donation() {
    // const [someState, setSomeState] = useState(initialValue);

    return (
        <>
            <div className="donation-page">
                <div className="header-donation">
                    <h1>HAZ UN DONATIVO</h1>
                    <p>Colabora con nosotros haciendo un donativo. Puedes destinarlo a nuestra actividad informativa y de asesoramiento técnico y legal o puedes proponer que vaya a un proyecto en concreto.</p>
                </div>

                <div className='donation-form-top'>
                    <p>Donativo mediante formulario:</p>
                    <p>Datos personales:</p>
                    {/* Input fields for personal data */}
                    <label htmlFor="name">Tu nombre:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="DUI">Número de Documento de Identidad:</label>
                    <input type="text" id="dui" name="dui" />

                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="text" id="telefono" name="telefono" />

                    <label htmlFor="departamento">Departamento:</label>
                    <input type="text" id="departamento" name="departamento" />

                    <label htmlFor="direccion">Dirección:</label>
                    <input type="text" id="email" name="direccion" />
                </div>

                <div className='donation-form-bottom'>
                    <div className='donacion-fields'>
                        <p>Donación</p>
                        {/* Input fields for donation amount */}
                        <label htmlFor="amount">Cantidad a donar:</label>
                        <input type="text" id="amount" name="amount" />

                        <label htmlFor="dedicar">¿A que te gustaría dedicar tu donativo?</label>
                        <input type="text" id="dedicar" name="dedicar" />


                        <label htmlFor="otro">En caso de haber seleccionado “Otros” en el apartado anterior, especifique:</label>
                        <input type="text" id="otro" name="otro" />
                    </div>
                    <div className='formas-pago'>

                    </div>

                    <button className='donation-aceptar'>ACEPTAR Y ENVIAR</button>
                </div>
            </div>
        </>
    );
}

export default Donation;
