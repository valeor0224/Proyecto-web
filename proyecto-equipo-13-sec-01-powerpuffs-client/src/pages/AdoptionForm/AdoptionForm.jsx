import React, { useState } from 'react';
import './AdoptionForm.css';

function AdoptionForm() {
    // Uncomment the line below if you need local state in this component
    // const [someState, setSomeState] = useState(initialValue);

    return (
        <div className="AdoptionForm">
            <div className='top-AdoptionForm'>
                <h1>
                    FORMULARIO DE ADOPCIÓN
                </h1>
                <p>
                    Recuerda: Adoptar una mascota es una decisión seria, implica alegrías, innumerables recompensas y responsabilidades, como velar por la alimentación, salud y seguridad del animalito durante toda su vida (que oscila entre 10 hasta 18 años), brindarle amor, compañía y no abandonarlo si nos vamos de viaje o nos mudamos de casa.
                </p>
                <p>
                    NOS RESERVAMOS el derecho de dar en adopción luego de evaluar este formulario
                </p>
                <div className='top-AdoptionForm-img'>
                    <h2>
                        Adoptar a
                    </h2>
                </div>
            </div>

            <div className='datos-personales-AdoptionForm'>
                <h2>
                    VERIFICA TUS DATOS PERSONALES
                </h2>


                <label htmlFor="nombre">Tu nombre:</label>
                <input type="text" id="nombre" name="nombre" placeholder="John" />

                <label htmlFor="apellido">Tu apellido:</label>
                <input type="text" id="apellido" name="apellido" placeholder="Apellido" />

                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" placeholder="correo@correo.com" />

                <label htmlFor="telefono">Teléfono:</label>
                <input type="text" id="telefono" name="telefono" placeholder="telefono" />

                <label htmlFor="direccion">Dirección:</label>
                            <input type="text" id="direccion" name="direccion" placeholder="Dirección" />

            </div>

            <div className='preguntas-AdoptionForm'>

            </div>

        </div>
    );
}

export default AdoptionForm;
