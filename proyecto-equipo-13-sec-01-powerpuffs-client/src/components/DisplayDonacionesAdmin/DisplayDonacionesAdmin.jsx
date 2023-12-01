import React, { useState } from 'react';
import './DisplayDonacionesAdmin.css';

function DisplayDonacionesAdmin({ data }) {

    return (
        <>
            <div className="Display-DonacionesAdmin">

                <h2>Comprobante de donación</h2>
                <h2>{data.name}</h2>
                <p>{data.email}</p>
                <p>Fecha : {data.date}</p>
                <h1>${data.amount}</h1>
                <div className='datos-extra-transferencia'>
                    <p><span>Método de pago:</span> {data.paymentMethod}</p>
                    <p><span>Destino de donación:</span> {data.dedicar}</p>
                    <p><span>Destino de donación (Otros):</span>{data.otro}</p>
                </div>

                {/* Add more details based on your data structure */}


            </div>
        </>
    );
}

export default DisplayDonacionesAdmin;
