import React, { useState } from 'react';
import './VerDonaciones.css';
import DonacionesAdminCard from '../../components/cards/DonacionesAdminCard/DonacionesAdminCard';
import DisplayDonacionesAdmin from '../../components/DisplayDonacionesAdmin/DisplayDonacionesAdmin';

function VerDonaciones() {

  return (
    <>
      <div className="Ver-Donaciones">
        <DonacionesAdminCard/>       

      </div>
    </>
  );
}

export default VerDonaciones;
