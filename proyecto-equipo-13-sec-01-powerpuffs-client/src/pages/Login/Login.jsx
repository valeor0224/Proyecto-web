import React from 'react'
import './Login.css'
import Back from '../../assets/img/Back.png';
import patitasLogoPink from '../../assets/img/pink-logo.png';

const Login = () => {
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
                    <input type="email" placeholder='correo@correo.com' value="" />

                    <p>Contraseña:</p>
                    <input type="password" placeholder="***********" value="" />
                </div>

                <div className="log-in">
                    <button id="login-btn"> INICIAR SESIÓN </button>
                    <div className="register-btn">
                        <span>¿Eres nuevo?</span>
                        <button id="registerbtn">Regístrate ahora</button>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Login
