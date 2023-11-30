import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AdoptionForm.css';


function AdoptionForm() {
    const { gatoImage, nameCat } = useParams();

    const [formData, setFormData] = useState({
        imagenCat: gatoImage || '',
        nomGato: nameCat || '',
        nombre: '',
        fechaNacimiento: '',
        telefono: '',
        apellido: '',
        email: '',
        direccion: '',
        educacion: '',
        profesion: '',
        tipoInmueble: '',
        espacioChecked: false, // Set initial value for boolean fields
        acuerdoChecked: false, // Set initial value for boolean fields
        gastos: '',
        alergias: '',
        razon: '',
        mascotas: '',
        mascotasPasadas: '',
        responsabilidadChecked: false,
        cuidados: '',
        renuncia: '',
        aceptoChecked: false, // Set initial value for boolean fields
    });


    /* const handleAceptoChange = () => {
         console.log('Acepto checked:', !formData.aceptoChecked);
         setFormData({ ...formData, aceptoChecked: !formData.aceptoChecked });
     };*/



    const handleEspacioChange = (value) => {
        setFormData({ ...formData, espacioChecked: value });
    };

    const handleAcuerdoChange = (value) => {
        setFormData({ ...formData, acuerdoChecked: value });
    };


    const handleResponsabilidadChange = (value) => {
        setFormData({ ...formData, responsabilidadChecked: value });
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const isSubmitDisabled = Object.values(formData).some((value) => value === null || value === '');

    const [submittedData, setSubmittedData] = useState(null);


    const handleSubmit = (e) => {
        console.log('Submit button clicked');
        console.log('Form submitted!', formData);

        // Add submission date to formData
        const submissionDate = new Date().toISOString();
        const formDataWithDate = { ...formData, submissionDate };

        // Convert formData to JSON string
        const jsonData = JSON.stringify(formDataWithDate, null, 2);
        console.log('Form data in JSON:', jsonData);

        // Update the state with submitted data
        setSubmittedData(jsonData);
    };
    





    return (

        <div className="AdoptionForm">
            <div className='top-AdoptionForm'>
                <h1>
                    FORMULARIO DE ADOPCIÓN
                </h1>
                <p>
                    Recuerda: Adoptar una mascota es una decisión seria, implica alegrías, innumerables recompensas y responsabilidades, como velar por la alimentación, salud y seguridad del animalito durante toda su vida (que oscila entre 10 hasta 18 años), brindarle amor, compañía y no abandonarlo si nos vamos de viaje o nos mudamos de casa.
                </p>
                <span>
                    NOS RESERVAMOS el derecho de dar en adopción luego de evaluar este formulario
                </span>
                <div className='top-AdoptionForm-img'>
                    <img src='https://cataas.com/cat' alt="gato-img" />
                    <h2>
                        Adoptar a {nameCat}
                    </h2>
                </div>
            </div>




            <div className='datos-personales-AdoptionForm'>
                <div className='datos-personales-AdoptionForm-left'>
                    <h2>VERIFICA TUS DATOS PERSONALES</h2>
                    <label htmlFor="nombre">Tu nombre:</label>
                    <input type="text" id="nombre" name="nombre" placeholder="John" onChange={handleInputChange} value={formData.nombre} />

                    <label htmlFor="fecha-nacimiento">Fecha de nacimiento:</label>
                    <input type="date" id="fecha-nacimiento" name="fechaNacimiento" onChange={handleInputChange} value={formData.fechaNacimiento} />

                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="text" id="telefono" name="telefono" placeholder="telefono" onChange={handleInputChange} value={formData.telefono} />
                </div>

                <div className='datos-personales-AdoptionForm-right'>
                    <label htmlFor="apellido">Tu apellido:</label>
                    <input type="text" id="apellido" name="apellido" placeholder="Apellido" onChange={handleInputChange} value={formData.apellido} />

                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" placeholder="correo@correo.com" onChange={handleInputChange} value={formData.email} />

                    <label htmlFor="direccion">Dirección:</label>
                    <input type="text" id="direccion" name="direccion" placeholder="Dirección" onChange={handleInputChange} value={formData.direccion} />
                </div>
            </div>


            <div className='preguntas-AdoptionForm'>
                <div className='preguntas-AdoptionForm-left'>
                    <h2>PREGUNTAS</h2>
                    <label htmlFor="Educacion">Nivel de Educación:</label>
                    <select id="Educacion" name="educacion" onChange={handleInputChange} value={formData.educacion}>
                        <option value="" disabled>Seleccione una opción</option>
                        <option value="Media">Media</option>
                    </select>

                    <label htmlFor="profesion">Profesión:</label>
                    <input type="text" id="profesion" name="profesion" placeholder="" onChange={handleInputChange} value={formData.profesion} />

                    <label htmlFor="Casa">Tipo de inmueble en el que habita:</label>
                    <select id="Casa" name="tipoInmueble" onChange={handleInputChange} value={formData.tipoInmueble}>
                        <option value="" disabled>Seleccione una opción</option>
                        <option value="Apartamento">Apartamento</option>
                    </select>

                    <div className="radio-group">
                        <label htmlFor="espacio">¿Tiene espacio suficiente para una mascota?</label>
                        <div className="radio-option">
                            <input type="radio" name="espacio" value="si" id="espacioSi" onChange={() => handleEspacioChange(true)} checked={formData.espacioChecked === true} />
                            <label htmlFor="espacioSi">Si</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" name="espacio" value="no" id="espacioNo" onChange={() => handleEspacioChange(false)} checked={formData.espacioChecked === false} />
                            <label htmlFor="espacioNo">No</label>
                        </div>
                    </div>

                    <div className="radio-group">
                        <label htmlFor="acuerdo">Las demás personas que viven con usted están de acuerdo con esta adopción</label>
                        <div className="radio-option">
                            <input type="radio" name="acuerdo" value="si" id="acuerdoSi" onChange={() => handleAcuerdoChange(true)} checked={formData.acuerdoChecked === true} />
                            <label htmlFor="acuerdoSi">Si</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" name="acuerdo" value="no" id="acuerdoNo" onChange={() => handleAcuerdoChange(false)} checked={formData.acuerdoChecked === false} />
                            <label htmlFor="acuerdoNo">No</label>
                        </div>
                    </div>

                    <label htmlFor="gastos">La mascota incurrirá gastos, denos un estimado mensual que tenga en mente.:</label>
                    <input type="number" id="gastos" name="gastos" min="0" step="0.01" placeholder="$" onChange={handleInputChange} value={formData.gastos} />

                    <label htmlFor="alergias">Es alérgico o alguien más en tu casa lo es?</label>
                    <input type="text" id="alergias" name="alergias" placeholder="" onChange={handleInputChange} value={formData.alergias} />

                    <label htmlFor="razon">¿Por qué quieres adoptar este gato?</label>
                    <input type="text" id="razon" name="razon" placeholder="" onChange={handleInputChange} value={formData.razon} />
                </div>


                <div className='preguntas-AdoptionForm-right'>
                    <label htmlFor="mascotas">¿Tiene más mascotas?</label>
                    <input type="text" id="mascotas" name="otrasMascotas" placeholder="" onChange={handleInputChange} value={formData.otrasMascotas} />

                    <label htmlFor="mascotas-pasadas">Ha tenido una mascota antes? ¿Qué pasó con ella(s)?</label>
                    <input type="text" id="mascotas-pasadas" name="mascotasPasadas" placeholder="" onChange={handleInputChange} value={formData.mascotasPasadas} />


                    <div className="radio-group">
                        <label htmlFor="responsabilidad">
                            Está dispuesto a asumir la responsabilidad en caso de enfermedad degenerativa o crónica de su mascota adoptada?
                        </label>
                        <div className="radio-option">
                            <input
                                type="radio"
                                name="responsabilidad"
                                value="yes"
                                id="responsabilidadYes"
                                onChange={() => handleInputChange({ target: { name: 'responsabilidad', value: true } })}
                                checked={formData.responsabilidad === true}
                            />
                            <label htmlFor="responsabilidadYes">Si</label>
                        </div>
                        <div className="radio-option">
                            <input
                                type="radio"
                                name="responsabilidad"
                                value="no"
                                id="responsabilidadNo"
                                onChange={() => handleInputChange({ target: { name: 'responsabilidad', value: false } })}
                                checked={formData.responsabilidad === false}
                            />
                            <label htmlFor="responsabilidadNo">No</label>
                        </div>
                    </div>



                    <label htmlFor="cuidados">¿Conoces los cuidados que requiere una mascota como la que deseas adoptar? Descríbalos</label>
                    <input type="text" id="cuidados" name="conocimientoCuidados" placeholder="" onChange={handleInputChange} value={formData.conocimientoCuidados} />

                    <label htmlFor="renuncia">¿Qué circunstancias justificaría que usted renuncie a su mascota?, ¿La entregaría de regreso a PATITAS SEGURAS?</label>
                    <input type="text" id="renuncia" name="circunstanciasRenuncia" placeholder="" onChange={handleInputChange} value={formData.circunstanciasRenuncia} />
                </div>


            </div>

            <div className='acepta-politica-adopcion'>
                <p>
                    Cuando entregamos en adopción es política, y por el bienestar del animal, visitar periódicamente al adoptado para verificar su buen trato y estado. Y mantener contacto con el adoptante, para conocer su estado y para brindar a su adoptante la atención e información necesaria en caso de cualquier situación de salud, o necesidad sobre el animal adoptado, y brindarle ayuda veterinaria si la requiere según el caso y si estás lejos pedir fotos o video que demuestren su bienestar. EL ANIMALITO ENTREGADO EN ADOPCIÓN SERÁ RETIRADO POR LA AGRUPACIÓN SI AL REALIZAR LA VISITA PERIÓDICA SE COMPRUEBA QUE SE ENCUENTRA EN MAL ESTADO FÍSICO, DE SALUD O EN CONDICIONES NO APTAS PARA SU BIENESTAR.
                </p>


                <div className='button-enviar-solicitud'>
                    <button className='enviar-solicitud' onClick={handleSubmit} /*disabled={isSubmitDisabled}*/>
                        ENVIAR SOLICITUD
                    </button>
                </div>

            </div>

            {/* Section to display submitted data */}
            {submittedData && (
                <div className="submitted-data">
                    <h2>Submitted Data</h2>
                    <pre>{submittedData}</pre>
                </div>
            )}

        </div>
    );
}

export default AdoptionForm;
