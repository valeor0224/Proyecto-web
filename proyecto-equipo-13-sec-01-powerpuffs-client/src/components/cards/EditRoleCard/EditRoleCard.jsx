import React from 'react';
import './EditRoleCard.css';

function EditRoleCard({ user, onClose }) {
  // Destructure user object to get the required fields
  const { userName, userEmail, userDepto } = user || {};

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="edit-role">
        <h1>EDITAR ROL</h1>

        <h1>Name: {userName}</h1>
        <p>Email: {userEmail}</p>
        <p>Departamento: {userDepto}</p>

        <label htmlFor="rol-edit">Rol:</label>
        <select id="rol-edit" name="rol-edit">
          <option value="" disabled>
            Seleccione una opción
          </option>
          <option value="role1">1</option>
          <option value="role2">2</option>
          <option value="role3">3</option>
        </select>

        <button className="guardar-rol" onClick={onClose}>
          GUARDAR CAMBIOS
        </button>
      </div>
    </>
  );
}

export default EditRoleCard;
