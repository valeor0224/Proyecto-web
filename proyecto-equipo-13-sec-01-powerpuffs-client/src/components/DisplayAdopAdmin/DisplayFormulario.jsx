import React, { useState } from 'react';
import './DisplayFormulario.css';
import { user as userData } from '../../components/initial-data';
import EstadoSoliCardAdmin from '../../components/EstadoSoliCardAdmin/EstadoSoliCardAdmin';
import DisplayAdopAdmin from '../../components/DisplayAdopAdmin/DisplayAdopAdmin';

function DisplayFormulario({ data, onClose }) {

    return (
        <>
            <div className="DisplayFormulario">
                <h1>Formulario de adopción</h1>

                <div className='formulario-datos-display'>

                    <p>Gato a adoptar:{data.nomGato} </p>
                    <p>Nombre: {data.nombre}</p>
                    <p>Fecha de nacimiento: {data.fechaNacimiento}</p>
                    <p>Número de contacto: {data.telefono }  </p>
                    <p>Correo electrónico: {data.apellido} </p>
                    <p>Nivel de educacion: {data.email} </p>
                    <p>¿Tiene más mascotas? {data.mascotas} </p>
                    <p>Profesión: {data.profesion}</p>
                    <p>Ha tenido una mascota antes? ¿Qué pasó con ella(s)?: {data.mascotasPasadas}</p>
                    <p>Tipo de inmueble en el que habita: {data.tipoInmueble} </p>
                    <p>¿Tiene espacio suficiente para una mascota?  {data.espacioChecked}</p>
                    <p>Está dispuesto a asumir la responsabilidad en caso de enfermedad degenerativa o crónica de su mascota adoptada?: </p>
                    <p> ¿Las demás personas que viven con usted están de acuerdo con esta adopción?: </p>
                    <p>¿Conoces los cuidados que requiere una mascota como la que deseas adoptar? Descríbalos: </p>
                    <p>La mascota incurrirá gastos, denos un estimado mensual que tenga en mente: {data.gastos}</p>
                    <p>¿Qué circunstancias justificaría que usted renuncie a su mascota?, ¿La entregaría de regreso a  PATITAS SEGURAS?: </p>
                    <p>¿Es alérgico o alguién más en su casa lo es?  </p>
                    <p>¿Por que quieres adoptar este gato?: </p>

                    <button onClick={onClose}>Close</button>
                </div>

            </div>
        </>
    );
}

export default DisplayFormulario;
