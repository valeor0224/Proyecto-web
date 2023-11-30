import React, { useState } from 'react';
import './VerSoliAdop.css';
import { user as userData } from '../../components/initial-data';
import EstadoSoliCardAdmin from '../../components/EstadoSoliCardAdmin/EstadoSoliCardAdmin';

function VerSoliAdop() {

  return (
    <>
      <div className="SoliAdop">
        <EstadoSoliCardAdmin/>          
      </div>
    </>
  );
}

export default VerSoliAdop;
