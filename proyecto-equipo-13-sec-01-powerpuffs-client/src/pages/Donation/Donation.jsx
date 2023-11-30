import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import gatoTop from '../../assets/img/gato-donation-top.png';
import blob from '../../assets/img/blob-donation.png';
import plato from '../../assets/img/plato-donation.png';
import Tarjeta from '../../components/FormaPago/Tarjeta';
import Transferencia from '../../components/FormaPago/Transferencia';


import './Donation.css';

function Donation() {
    const [showTarjetaPopup, setShowTarjetaPopup] = useState(false);
    const [showTransferenciaPopup, setShowTransferenciaPopup] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        apellido: '',
        dui: '',
        email: '',
        telefono: '',
        departamento: '',
        direccion: '',
        amount: '',
        dedicar: '',
        otro: '',
        paymentMethod: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Do something with formData (e.g., save to JSON, send to server)
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);

        // Additional logic for saving or sending data can be added here
    };


    const handlePaymentMethodChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            paymentMethod: value,
        }));

        // Open or close popups based on the selected payment method
        setShowTarjetaPopup(value === 'method1');
        setShowTransferenciaPopup(value === 'method2');
    };

    const handleTarjetaClose = () => {
        // Perform any additional cleanup or logic needed when the Tarjeta component is closed
        setShowTarjetaPopup(false);
    };

    const handleTransferenciaClose = () => {
        // Perform any additional cleanup or logic needed when the Transferencia component is closed
        setShowTransferenciaPopup(false);
    };

    return (
        <>
            <div className="donation-page">
                <div className="header-donation">
                    <h1>HAZ UN DONATIVO</h1>
                    <p>Colabora con nosotros haciendo un donativo. Puedes destinarlo a nuestra actividad informativa y de asesoramiento técnico y legal o puedes proponer que vaya a un proyecto en concreto.</p>
                </div>
                <div className='donation-form-container'>
                    <h2>Donativo mediante formulario:</h2>
                    <div className='donation-form-top'>

                        <div className='imagenes top'>
                            <img src={gatoTop} alt="gato" />
                            <img src={blob} alt="blob" />
                        </div>

                        <div className='personal-data'>
                            <h3>Datos personales:</h3>
                            {/* Input fields for personal data */}
                            <label htmlFor="name">Tu nombre:</label>
                            <input type="text" id="name" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} />


                            <label htmlFor="apellido">Tu apellido:</label>
                            <input type="text" id="apellido" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} />

                            <label htmlFor="dui">Número de Documento de Identidad:</label>
                            <input type="text" id="dui" name="dui" placeholder="Ingresar sin guiones" value={formData.dui} onChange={handleChange} />

                            <label htmlFor="email">Correo electrónico:</label>
                            <input type="email" id="email" name="email" placeholder="correo@correo.com" value={formData.email} onChange={handleChange} />

                            <label htmlFor="telefono">Teléfono:</label>
                            <input type="text" id="telefono" name="telefono" placeholder="telefono" value={formData.telefono} onChange={handleChange} />

                            <label htmlFor="departamento">Departamento:</label>
                            <select id="departamento" name="departamento" value={formData.departamento} onChange={handleChange}>
                                <option value="" disabled>Seleccione una opción</option>
                                <option value="Ahuachapan">Ahuachapán</option>
                                <option value="Cabañas">Cabañas</option>
                                <option value="Chalatenango">Chalatenango</option>
                                <option value="Cuscatlan">Cuscatlán</option>
                                <option value="La-Libertad">La Libertad</option>
                                <option value="Morazan">Morazan</option>
                                <option value="La-Paz">La Paz</option>
                                <option value="Santa-Ana">Santa Ana</option>
                                <option value="San-Miguel">San Miguel</option>
                                <option value="San-Salvador">San Salvador</option>
                                <option value="San-Vicente">San Vicente</option>
                                <option value="Sonsonate">Sonsonate</option>
                                <option value="La-Union">La Union</option>
                                <option value="Usulutan">Usulutan</option>
                            </select>

                            <label htmlFor="direccion">Dirección:</label>
                            <input type="text" id="direccion" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} />


                        </div>


                    </div>

                    <div className='donation-form-bottom'>
                        <div className='donacion-fields'>
                            <h3>Donación</h3>
                            {/* Input fields for donation amount */}
                            <label htmlFor="amount">Cantidad a donar:</label>
                            <input type="number" id="amount" name="amount" min="0" step="0.01" placeholder="$" />

                            <label htmlFor="dedicar">¿A que te gustaría dedicar tu donativo?</label>
                            {/* Dropdown box for "Dedicar" */}
                            <select id="dedicar" name="dedicar">
                                <option value="" selected disabled>Seleccione una opción</option>
                                <option value="actividad">Actividad informativa y de asesoramiento técnico y legal</option>
                                <option value="proyecto">Proyecto específico</option>
                                <option value="otros">Otros</option>
                            </select>

                            <label htmlFor="otro">En caso de haber seleccionado “Otros” en el apartado anterior, especifique:</label>
                            <input type="text" id="otro" name="otro" placeholder="Especifique acá" value={formData.otro} onChange={handleChange} />
                        </div>


                        <div className='formas-pago'>
                            <h3>Forma de pago</h3>
                            <label>
                                <input type="radio" name="paymentMethod" value="method1" onChange={handlePaymentMethodChange} />
                                Tarjeta
                            </label>

                            <label>
                                <input type="radio" name="paymentMethod" value="method2" onChange={handlePaymentMethodChange} />
                                Transferencia
                            </label>
                        </div>

                        {showTarjetaPopup && <Tarjeta onClose={handleTarjetaClose} />}
                        {showTransferenciaPopup && <Transferencia onClose={handleTransferenciaClose} />}


                        <div className='terminos'>
                            <p>Le informamos que los datos que voluntariamente nos proporcione en el presente formulario serán tratados por nuestra organización con la finalidad de dar respuesta a su solicitud y gestionar su colaboración. Sus datos no serán cedidos a terceros, salvo cuando sea indispensable para la prestación del servicio u obligaciones legales. Puede ejercer sus derechos de acceso, rectificación, limitación, portabilidad, oposición y supresión de los datos a través del correo electrónico nomrefugio@gmail.com</p>
                            <p><span>He leído y acepto </span>la Política de Privacidad y doy mi consentimiento al sitio para que puedan contactar conmigo por teléfono o correo electrónico para responder a mi solicitud, así como recibir información sobre las acciones de la Fundación y posibles formas de colaboración. </p>
                            <button className='donation-aceptar' onClick={handleSubmit}>
                                ACEPTAR Y ENVIAR
                            </button>

                        </div>



                    </div>
                    <div className='agradecimiento'>
                        <div className='img-plato'>
                            <img src={plato} alt="plato" />
                        </div>
                        <div className='parrafo-gracias'>
                            <p>
                                En muchos países, incluido el nuestro, existe un número significativo de gatos abandonados que enfrentan accidentes, enfermedades y dificultades en su vida diaria.
                                Trabajamos para sensibilizar a la sociedad sobre la realidad de estas especies. Enfocamos nuestro esfuerzo en su protección y defensa intentando dignificar y mejorar sus condiciones de vida.
                                Nuestro trabajo se sostiene en gran porcentaje gracias a la generosidad de donantes como tú, no podríamos seguir provocando cambios positivos a nuestro alrededor sin tu ayuda.
                                ¡GRACIAS POR DEFENDER A LOS ANIMALES!
                            </p>
                        </div>

                    </div>


                </div>
            </div>

        </>
    );
}

export default Donation;
