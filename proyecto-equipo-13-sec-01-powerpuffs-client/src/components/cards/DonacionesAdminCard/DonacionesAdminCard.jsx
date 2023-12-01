import React, { useState } from 'react';
import './DonacionesAdminCard.css';
import { TransactionsDonaciones } from '../../initial-data';
import DisplayDonacionesAdmin from '../../DisplayDonacionesAdmin/DisplayDonacionesAdmin';

function DonacionesAdminCard() {

    const [selectedData, setSelectedData] = useState(null);

    const handleOpenButtonClick = (data) => {
        setSelectedData(data);
    };

    return (
        <>
            <div className="Donaciones-AdminCard">
                <div className='container-cards-donaciones'>
                    {TransactionsDonaciones.map((TransactionsDonaciones, index) => (
                        <div key={index} className="DonacionAdmin-Card">
                            {/*name of object*/}
                            <p>Name: {TransactionsDonaciones.name}</p>
                            <p>Date: {TransactionsDonaciones.date}</p>
                            <p>${TransactionsDonaciones.amount}</p>
                            <button
                                className='open-donacion'
                                onClick={() => handleOpenButtonClick(TransactionsDonaciones)}
                            >
                                Open
                            </button>
                        </div>
                    ))}

                </div>

                <div className='displayadopadmin-container'>
                    {/* Display DisplayAdopAdmin when selectedData is available */}
                    {selectedData && (
                        <DisplayDonacionesAdmin data={selectedData} onClose={() => setSelectedData(null)} />
                    )}

                </div>



            </div>
        </>
    );
}

export default DonacionesAdminCard;
