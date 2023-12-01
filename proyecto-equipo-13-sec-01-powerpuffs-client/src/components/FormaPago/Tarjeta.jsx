import React, { useState } from 'react';
import './Tarjeta.css';

function Tarjeta({ onClose }) {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState('');

    // Modify the onClose call to pass the required date
    const handleSubmit = (e) => {
        e.preventDefault();

        // Input validation
        if (!cardName || !cardNumber || !expiryDate || !cvv || !amount) {
            alert('Please fill in all fields');
            return;
        }

        // You can perform additional validation here

        console.log('Submitted:', { cardName, cardNumber, expiryDate, cvv, amount });
        alert('La transacción ha sido exitosa!');

        // Pass the amount and the current date to the onClose function
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
        <div className='tarjeta-popup'>
            <h1>Ingrese sus datos</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    <p>Nombre del tarjetahabiente:</p>
                    <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="Enter Cardowner Name"
                    />
                </label>

                <label>
                    <p>Card Number:</p>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Enter card number"
                    />
                </label>

                <label>
                    <p>Expiry Date:</p>
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YY"
                    />
                </label>

                <label>
                    <p>CVV:</p>
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="Enter CVV"
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

                <div className="button-tarjeta">
                    <button className='submit-tarjeta' type="submit">Submit</button>
                    <button className='cancel-tarjeta' type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Tarjeta;
