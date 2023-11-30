import React, { useState } from 'react';
import './VerSoliAdop.css';
import { user as userData } from '../../components/initial-data';
import EstadoSoliCardAdmin from '../../components/EstadoSoliCardAdmin/EstadoSoliCardAdmin';
import DisplayAdopAdmin from '../../components/DisplayAdopAdmin/DisplayAdopAdmin';

function VerSoliAdop() {

  return (
    <>
      <div className="SoliAdop">
        <h1 className='titulo-soliadop'>SOLICITUDES DE ADOPCIÓN</h1>
      <EstadoSoliCardAdmin />        
      </div>
    </>
  );
}

export default VerSoliAdop;
