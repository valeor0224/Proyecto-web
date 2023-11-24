import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import patitasLogo from '../../assets/img/patitas-seguras-logo.svg';
import userLogo from '../../assets/img/profile-icon.png';
import singoutLogo from '../../assets/img/logout.png';
import './Header.css';
import AuthService from '../../services/AuthService'; // Import the AuthService

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isAuthenticated());
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleButtonNav = () => {
    navigate(`/Login`);
  };

  const handleButtonNav2 = () => {
    navigate(`/My-profile`);
  };

  const handleProfilePicClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Perform logout actions (e.g., clear user data)
    AuthService.logout();

    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  useEffect(() => {
    const isAuthenticated = AuthService.isAuthenticated();
    console.log('Is Authenticated:', isAuthenticated);
    setIsLoggedIn(isAuthenticated);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const userProfilePic = AuthService.getUser()?.userProfilePic;

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
        {isLoggedIn ? (
          <div className="user-profile-container" ref={dropdownRef}>
            <button className="user-profile-pic-cont">
              <img
                className="user-profile-pic"
                src={userProfilePic}
                alt="User Profile"
                onClick={handleProfilePicClick}
              />
              <p onClick={handleButtonNav2}>MI PERFIL</p>
            </button>
            {showDropdown && (
              <div className="user-profile-dropdown">
                <div className="dropdown-cont">
                  <img src={userLogo} alt="my-prof" />
                  <button onClick={handleButtonNav2}>Mi perfil</button>
                </div>
                <div className="dropdown-cont">
                  <img src={singoutLogo} alt="sign-out" />
                  <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
              </div>
            )}
            <button className="sign-out-button" onClick={handleLogout}>
              <img src={singoutLogo} alt="sign-out" />
              CERRAR SESIÓN
            </button>
          </div>
        ) : (
          <button className="primary-button" onClick={handleButtonNav}>
            INICIAR SESIÓN
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;




