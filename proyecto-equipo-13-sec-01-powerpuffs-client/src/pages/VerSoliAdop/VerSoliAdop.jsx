import React, { useState } from 'react';
import './VerSoliAdop.css';
import { user as userData } from '../../components/initial-data';
import EstadoSoliCardAdmin from '../../components/EstadoSoliCardAdmin/EstadoSoliCardAdmin';
import DisplayAdopAdmin from '../../components/DisplayAdopAdmin/DisplayAdopAdmin';

function VerSoliAdop() {

  return (
    <>
      <div className="SoliAdop">
        <EstadoSoliCardAdmin/> 
        <DisplayAdopAdmin/>         
      </div>
    </>
  );
}

export default VerSoliAdop;
