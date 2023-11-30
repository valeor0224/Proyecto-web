import React, { useState } from 'react';
import './DisplayAdopAdmin.css';
import { user as userData } from '../../components/initial-data';
import AdopcionAdminCard from '../cards/AdopcionAdminCard/AdopcionAdminCard';

const DisplayAdopAdmin = ({ data, onClose }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="DisplayAdopAdmin">
      <h2>DisplayAdopAdmin</h2>
      <p>Name: {data.nombre}</p>
      <p>Submission date: {data.submissionDate}</p>
      {/* Add more details based on your data structure */}

      <button className='view-formulario'>
        Ver formulario de adopcion
      </button>

      <div className='cita-visita'>
        <label htmlFor="fecha-cita">Fecha de cita:</label>
        <input type="date" id="fecha-cita" name="fechaCita" />

        <label for="meeting-time">Hora cita:</label>

        <input type="time" id="meeting-time" name="meeting-time" min="09:00" max="18:00" required />

      </div>

      <div className='resolucion-adopcion'>
        <p>Resolución</p>
        <select id="Educacion" name="educacion" >
          <option value="pendiente">Pendiente</option>
          <option value="aprobado">Aprobado</option>
          <option value="denegado">Denegado</option>
        </select>
        <input type="text" id="resolucion-input" name="resolucion-input" placeholder="Motivo de la resolucion" />
       
      </div>


      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DisplayAdopAdmin;