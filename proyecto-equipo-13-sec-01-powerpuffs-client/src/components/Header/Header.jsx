import React from 'react';
import patitasLogo from '../../assets/img/patitas-seguras-logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={patitasLogo} alt="Patitas Seguras" />
      </div>
      <div className="navbar-links-container">
        <a href="/">INICIO</a>
        <a href="/Adopta">ADOPTA</a>
        <a href="/events">EVENTOS</a>
        <a href="/news">NOTICIAS</a>
        <a href="/adopt-forms">FORMAS DE AYUDAR</a>
        <a href="/contact">CONTÁCTANOS</a>
        <button className="primary-button">INICIAR SESIÓN</button>
      </div>
    </nav>
  );
};

export default Header;

