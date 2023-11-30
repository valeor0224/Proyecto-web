import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import patitasLogo from '../../assets/img/patitas-seguras-logo.svg';
import userLogo from '../../assets/img/profile-icon.png';
import singoutLogo from '../../assets/img/logout.png';
import './Header.css';
import AuthService from '../../services/AuthService'; // Import the AuthService
import { useUserContext } from '../../UserContext';


const Header = () => {

  const {user2} = useUserContext();

  //console.log(userRole);

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isAuthenticated());
  const dropdownRef = useRef(null);
  const [userProfilePic, setUserProfilePic] = useState(AuthService.getUser()?.userProfilePic);



  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleButtonNav = () => {
    navigate(`/Login`);
    setShowMenu(false);
  };

  const handleButtonNav2 = () => {
    navigate(`/My-profile`);
    setShowMenu(false);
    setShowDropdown(false);
  };

  const handleProfilePicClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    AuthService.logout();
    setShowDropdown(false);
    setShowMenu(false);
  };

  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(AuthService.isAuthenticated());
    };

    AuthService.registerListener(updateLoginStatus);

    return () => {
      AuthService.unregisterListener(updateLoginStatus);
    };
  }, []);

  useEffect(() => {
    const isAuthenticated = AuthService.isAuthenticated();
    console.log('Is Authenticated:', isAuthenticated);
    setIsLoggedIn(isAuthenticated);
  }, [isLoggedIn]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showDropdown]);

  useEffect(() => {
    const updateProfilePic = () => {
      setUserProfilePic(AuthService.getUser()?.userProfilePic);
    };

    AuthService.registerListener(updateProfilePic);
  
    return () => {
      AuthService.unregisterListener(updateProfilePic);
    };
  }, []);

  const handleNavLinkClick = () => {
    
    setShowMenu(false);
  };

  console.log(user2?.roleId);

  return (
    <nav>
      <div className="nav-logo-container">
        <NavLink to="/" >
          <img src={patitasLogo} alt="Patitas Seguras" />
        </NavLink>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        {showMenu ? 'X' : '☰'}
      </button>
      <div className={`navbar-links-container ${showMenu ? 'show' : ''}`}>

        {user2?.roleId === '1' ? (
          <div className="admin-links">
            <NavLink to="/" onClick={handleNavLinkClick}>INICIO</NavLink>
            <NavLink to="/Solicitudes-de-adopcion" onClick={handleNavLinkClick}>SOLICITUDES DE ADOPCIÓN</NavLink>
            <NavLink to="/Donaciones-tool" onClick={handleNavLinkClick}>DONACIONES</NavLink>
            <NavLink to="/Event" onClick={handleNavLinkClick}>EVENTOS</NavLink>
            <NavLink to="/news" onClick={handleNavLinkClick}>NOTICIAS</NavLink>
            <NavLink to="/User-list" onClick={handleNavLinkClick}>USUARIOS</NavLink>
          </div>
        ) : user2?.roleId === '2' ? (
          <div className="moderador-links" >
            <NavLink to="/" onClick={handleNavLinkClick}>INICIO</NavLink>
            <NavLink to="/Solicitudes-de-adopcion" onClick={handleNavLinkClick}>SOLICITUDES DE ADOPCIÓN</NavLink>
            <NavLink to="/Event" onClick={handleNavLinkClick}>EVENTOS</NavLink>
            <NavLink to="/news" onClick={handleNavLinkClick}>NOTICIAS</NavLink>
            <NavLink to="/Contactanos-inbox" onClick={handleNavLinkClick}>BANDEJA DE ENTRADA</NavLink>
          </div>
        ) : (
          <div className="user-other-links" ref={dropdownRef}>
            <NavLink to="/" onClick={handleNavLinkClick}>INICIO</NavLink>
            <NavLink to="/Adopta" onClick={handleNavLinkClick}>ADOPTA</NavLink>
            <NavLink to="/Event" onClick={handleNavLinkClick}>EVENTOS</NavLink>
            <NavLink to="/news" onClick={handleNavLinkClick}>NOTICIAS</NavLink>
            <NavLink to="/Donation" onClick={handleNavLinkClick}>FORMAS DE AYUDAR</NavLink>
            <NavLink to="/Contactanos" onClick={handleNavLinkClick}>CONTÁCTANOS</NavLink>
          </div>
        )}

        {isLoggedIn ? (
          <div className="user-profile-container">
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





