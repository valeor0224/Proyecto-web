import React, { useState } from 'react';
import './DonacionesAdminCard.css';
import { donaciones } from '../../initial-data';

function DonacionesAdminCard() {

    return (
        <>
            <div className="Donaciones-AdminCard">
                <div className='container-cards-donaciones'>
                    {formSubmissions.map((donaciones, index) => (
                        <div key={index} className="AdopcionAdmin-Card">
                            <p>Name: {donaciones.nombre}</p>
                            <p>Date: {donaciones.submissionDate}</p>
                            <button
                                className='envelop-adopcion-admin'
                                onClick={() => handleOpenButtonClick(donaciones)}
                            >
                                Open
                            </button>
                        </div>
                    ))}

                </div>



            </div>
        </>
    );
}

export default DonacionesAdminCard;
