import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import patitasLogo from '../../assets/img/patitas-seguras-logo.svg';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigate = useNavigate();

  const handleButtonNav = () => {
    navigate(`/Login`);
  }

  return (
    <nav>
      <div className="nav-logo-container">
        <NavLink to="/">
          <img src={patitasLogo} alt="Patitas Seguras" />
        </NavLink>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        {showMenu ? 'X' : '☰'}
      </button>
      <div className={`navbar-links-container ${showMenu ? 'show' : ''}`}>
        <NavLink to="/">INICIO</NavLink>
        <NavLink to="/Adopta">ADOPTA</NavLink>
        <NavLink to="/Event">EVENTOS</NavLink>
        <NavLink to="/news">NOTICIAS</NavLink>
        <NavLink to="/adopt-forms">FORMAS DE AYUDAR</NavLink>
        <NavLink to="/contact">CONTÁCTANOS</NavLink>
        <button className="primary-button" onClick={handleButtonNav}>INICIAR SESIÓN</button>
      </div>
    </nav>
  );
};

export default Header;


