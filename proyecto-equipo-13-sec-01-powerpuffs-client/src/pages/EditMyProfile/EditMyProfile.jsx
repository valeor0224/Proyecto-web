import React, { useState } from 'react';
import defaultImage from "../../assets/img/default-profilepic.svg";
import './EditMyProfile.css';

function EditMyProfile() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        numeroContacto: '',
        correoElectronico: '',
        direccion: '',
        departamento: '',
        contrasena: '',
        confirmContrasena: '',
        presentacion: '',
        profilePicture: null,
    });

    const [passwordError, setPasswordError] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
    
        // Update the profilePicture in formData
        setFormData({
          ...formData,
          profilePicture: file,
        });
    
        setSelectedFile(file);
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Password validation
        if (formData.contrasena !== formData.confirmContrasena) {
          setPasswordError('Las contraseñas no coinciden');
          return;
        }
    
        // Clear password error if validation passes
        setPasswordError('');
    
        // Log form data including the profilePicture
        console.log(formData);
      };

    return (
        <>
            <div className="Register-page">
                <div className="Register-container">
                    <div className='Register-top-container'>
                        <h1>BIENVENIDO A PATITAS SEGURAS</h1>
                        <h2>Te invitamos a que completes tu perfil para que podamos conocer más de ti</h2>
                        <div className='register-profilepic'>

                            {selectedFile ? (
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Selected Profile Picture"
                                    style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '10px' }}
                                />
                            ) : (
                                <img
                                    src={defaultImage}
                                    alt="Default Profile Picture"
                                    style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '10px' }}
                                />
                            )}
                            <input
                                type="file"
                                id="profilePicInput"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <label htmlFor="profilePicInput" className='cambiar-foto-registro'>
                                CAMBIAR FOTO
                            </label>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className='register-form-field'>

                            <div className='register-form-left'>
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Nombre"
                                />

                                <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                                <input
                                    type="date"
                                    id="fechaNacimiento"
                                    name="fechaNacimiento"
                                    value={formData.fechaNacimiento}
                                    onChange={handleInputChange}
                                    required
                                />

                                <label htmlFor="numeroContacto">Número de contacto:</label>
                                <input
                                    type="text"
                                    id="numeroContacto"
                                    name="numeroContacto"
                                    value={formData.numeroContacto}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="00000000"
                                />

                                <label htmlFor="departamento">Departamento:</label>
                                <select id="departamento" name="departamento" value={formData.departamento} onChange={handleInputChange} required>
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value="Ahuachapan">Ahuachapán</option>
                                    <option value="Cabañas">Cabañas</option>
                                    <option value="Chalatenango">Chalatenango</option>
                                    <option value="Cuscatlan">Cuscatlán</option>
                                    <option value="La-Libertad">La Libertad</option>
                                    <option value="Morazan">Morazan</option>
                                    <option value="La-Paz">La Paz</option>
                                    <option value="Santa-Ana">Santa Ana</option>
                                    <option value="San-Miguel">San Miguel</option>
                                    <option value="San-Salvador">San Salvador</option>
                                    <option value="San-Vicente">San Vicente</option>
                                    <option value="Sonsonate">Sonsonate</option>
                                    <option value="La-Union">La Union</option>
                                    <option value="Usulutan">Usulutan</option>
                                </select>

                                <label htmlFor="contrasena">Contraseña:</label>
                                <input
                                    type="password"
                                    id="contrasena"
                                    name="contrasena"
                                    value={formData.contrasena}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Cree su contraseña"
                                />

                                <label htmlFor="confirmContrasena">Confirmar Contraseña:</label>
                                <input
                                    type="password"
                                    id="confirmContrasena"
                                    name="confirmContrasena"
                                    value={formData.confirmContrasena}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Escriba de nuevo su contraseña"
                                />
                                {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

                            </div>

                            <div className='register-form-right'>
                                <label htmlFor="apellido">Apellido:</label>
                                <input
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                    value={formData.apellido}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Apellido"
                                />



                                <label htmlFor="correoElectronico">Correo electrónico:</label>
                                <input
                                    type="email"
                                    id="correoElectronico"
                                    name="correoElectronico"
                                    value={formData.correoElectronico}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="correo@correo.com"
                                />




                                <label htmlFor="direccion">Dirección:</label>
                                <input
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    value={formData.direccion}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Dirección"
                                />


                                <label htmlFor="presentacion">Presentación:</label>
                                <input
                                    type="text"
                                    id="presentacion"
                                    name="presentacion"
                                    value={formData.presentacion}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Escriba algo sobre usted"
                                />

                            </div>

                        </div>

                        {/* Repeat the above block for other form fields */}



                        <button type="submit" className='submit-button-register'>
                            Enviar
                        </button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default EditMyProfile;