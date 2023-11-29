// EditRoleCard.jsx

import React from 'react';
import './EditRoleCard.css';

function EditRoleCard({ userId, onClose, userData }) {
    console.log('Received User ID:', userId);

    // Find the user based on userId
    const user = userData.find(user => user.id === userId) || {};

    // Destructure relevant user fields with default values
    const { userName = 'deafultname', userEmail = '', userDepto = '', roleId = '' } = user;

    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className="edit-role">
                <h1>EDITAR ROL</h1>

                <h1>Name: {userName}</h1>
                <p>Email: {userEmail}</p>
                <p>Departamento: {userDepto}</p>

                <label htmlFor="rol-edit">Rol:</label>
                <select id="rol-edit" name="rol-edit" defaultValue={roleId}>
                    <option value="1">1 (Admin)</option>
                    <option value="2">2 (Moderador)</option>
                    <option value="3">3 (Usuario)</option>
                </select>

                <button className="guardar-rol" onClick={onClose}>
                    GUARDAR CAMBIOS
                </button>
            </div>
        </>
    );
}

export default EditRoleCard;
