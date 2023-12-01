import React, { useState } from 'react';
import './Transferencia.css';

function Transferencia({ onClose }) {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [banco, setBanco] = useState('');
    const [cuenta, setCuenta] = useState('');
    const [correo, setCorreo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!recipient || !amount || !banco || !cuenta || !correo) {
            alert('Please fill in all fields');
            return;
        }

        alert('La transacción ha sido exitosa!');
        // For educational purposes, log the submitted data
        console.log('Submitted:', { recipient, amount, banco, cuenta, correo });

        // Pass the transfer amount to the Donation component
        onClose(amount, new Date());
    };

    // In Tarjeta.jsx
    const handleCancel = () => {
        setCardName('');
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setAmount('');

        // Pass default values or empty values to onClose
        onClose(0, new Date()); // You can adjust the default values as needed
    };


    return (
        <div className="transferencia-popup">
            <h1>Ingrese sus datos</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    <p>Banco:</p>
                    <select
                        value={banco}
                        onChange={(e) => setBanco(e.target.value)}
                    >
                        <option value="" disabled>Seleccione un banco</option>
                        <option value="Banco-Agricola">Banco Agrícola</option>
                        <option value="Banco-Cuscatlan">Banco Cuscatlán</option>
                        <option value="Banco-Hipotecario">Banco Hipotecario</option>
                        <option value="Davivienda">Davivienda</option>
                        {/* Add more banks as needed */}
                    </select>
                </label>


                <label>
                    <p>Número de cuenta:</p>
                    <input
                        type="text"
                        value={cuenta}
                        onChange={(e) => setCuenta(e.target.value)}
                        placeholder="Ingrese su número de cuenta"
                    />
                </label>

                <label>
                    <p>Correo electrónico:</p>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="ej. correo@correo.com"
                    />
                </label>

                <label>
                    <p>Amount:</p>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter transfer amount"
                    />
                </label>


                <label>
                    <p>Recipient:</p>
                    <input
                        type="text"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder="Enter recipient's name"
                    />
                </label>




                <div className='button-transferencia'>
                    <button className='submit-transferencia' type="submit">Submit</button>
                    <button className='cancel-transferencia' type="button" onClick={handleCancel}>Cancel</button>
                </div>

            </form>
        </div>
    );
}

export default Transferencia;
