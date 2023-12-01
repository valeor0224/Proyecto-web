import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Back from '../../assets/img/Back.png';
import patitasLogoPink from '../../assets/img/pink-logo.png';
import authService from '../../services/AuthService';
import { useUserContext } from '../../UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUserAndRole,user2 } = useUserContext();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


  const handleLoginClick = async () => {
  try {
    const isAuthenticated = await authService.login(email, password);

    if (isAuthenticated) {
      const userData = authService.getUser();
      setUserAndRole(userData);
      console.log('User Role:', user2?.roleId);
      navigate(-1);
    } else {
      setError('Invalid email or password');
    }
  } catch (error) {
    setError('An error occurred during login');
    console.error('Login error:', error);
  }
};


    return (
        <div>
            <div className="wpp-cont">
                <div className="login-container">
                    <div className="return-btn-container">
                        <button className="return-btn-login">

                            <img src={Back} alt="Return-logo" />
                        </button>
                        <img id="logo" src={patitasLogoPink} alt="Pink-logo" />
                    </div>

                    <div className="welcome-back">
                        <h1>¡Hola de nuevo!</h1>
                        <p>Nos alegra que estés de regreso, ingresa tus datos para empezar</p>
                    </div>

                    <div className="login-input">
                        <p>Correo electrónico:</p>
                        <input
                            type="email"
                            placeholder="correo@correo.com"
                            value={email}
                            onChange={handleEmailChange}
                        />

                        <p>Contraseña:</p>
                        <input
                            type="password"
                            placeholder="***********"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>

                <div className="log-in">
                    <button id="login-btn" onClick={handleLoginClick}> INICIAR SESIÓN </button>
                    <div className="register-btn">
                        <span>¿Eres nuevo?</span>
                        {/* Trigger the handleRegisterClick function when the button is clicked */}
                        <button id="registerbtn" onClick={handleRegisterClick}>
                            Regístrate ahora
                        </button>
                    </div>
                    <div className="error-cont">
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login