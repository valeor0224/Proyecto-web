import React, { useState } from 'react';
import './DisplayAdopAdmin.css';
import { user as userData } from '../../components/initial-data';
import AdopcionAdminCard from '../cards/AdopcionAdminCard/AdopcionAdminCard';

function DisplayAdopAdmin() {

  return (
    <>
      <div className="Display-AdopAdmin">
        <h1>Solicitud de adopción</h1>
        <p>name: </p>
        <p>email: </p>
        <p>Desea adoptar a: catName</p>

        <p>Formulario de adopcion</p>
       


        
      </div>
    </>
  );
}

export default DisplayAdopAdmin;
