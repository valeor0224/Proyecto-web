import React, { useState } from 'react';
import patitasLogo from '../../assets/img/patitas-seguras-logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={patitasLogo} alt="Patitas Seguras" />
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        {showMenu ? 'X' : '☰'}
      </button>
      <div className={`navbar-links-container ${showMenu ? 'show' : ''}`}>
        <a href="/">INICIO</a>
        <a href="/Adopta">ADOPTA</a>
        <a href="/Event">EVENTOS</a>
        <a href="/news">NOTICIAS</a>
        <a href="/Donation">FORMAS DE AYUDAR</a>
        <a href="/contact">CONTÁCTANOS</a>
        <button className="primary-button">INICIAR SESIÓN</button>
      </div>
    </nav>
  );
};

export default Header;

