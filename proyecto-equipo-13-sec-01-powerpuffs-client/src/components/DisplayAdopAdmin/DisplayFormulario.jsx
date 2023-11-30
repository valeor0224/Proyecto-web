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

                    <p><span>Gato a adoptar:</span>{data.nomGato} </p>
                    <p><span>Nombre:</span> {data.nombre}</p>
                    <p><span>Fecha de nacimiento: </span>{data.fechaNacimiento}</p>
                    <p><span>Número de contacto:</span>{data.telefono}  </p>
                    <p><span>Correo electrónico: </span>{data.email} </p>
                    <p><span>Nivel de educacion:</span> {data.educacion} </p>
                    <p><span>¿Tiene más mascotas? </span>{data.mascotas} </p>
                    <p><span>Profesión: </span>{data.profesion}</p>
                    <p><span>Ha tenido una mascota antes? ¿Qué pasó con ella(s)?:</span> {data.mascotasPasadas}</p>
                    <p><span>Tipo de inmueble en el que habita:</span> {data.tipoInmueble} </p>
                    <p><span>¿Tiene espacio suficiente para una mascota?</span>  {data.espacioChecked}</p>
                    <p><span>Está dispuesto a asumir la responsabilidad en caso de enfermedad degenerativa o crónica de su mascota adoptada?: </span></p>
                    <p> <span>¿Las demás personas que viven con usted están de acuerdo con esta adopción?:</span> </p>
                    <p><span>¿Conoces los cuidados que requiere una mascota como la que deseas adoptar? Descríbalos:</span> {data.conocimientoCuidados} </p>
                    <p><span>La mascota incurrirá gastos, denos un estimado mensual que tenga en mente:</span> {data.gastos}</p>
                    <p><span>¿Qué circunstancias justificaría que usted renuncie a su mascota?, ¿La entregaría de regreso a  PATITAS SEGURAS?: </span>{data.circunstanciasRenuncia} </p>
                    <p><span>¿Es alérgico o alguién más en su casa lo es? </span> </p>
                    <p><span>¿Por que quieres adoptar este gato?:</span> {data.razon} </p>

                    <button onClick={onClose}>Close</button>
                </div>

            </div>
        </>
    );
}

export default DisplayFormulario;
