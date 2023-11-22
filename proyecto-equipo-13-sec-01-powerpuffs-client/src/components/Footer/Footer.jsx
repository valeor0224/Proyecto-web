import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import locationLogo from '../../assets/img/location.png';
import phoneLogo from '../../assets/img/phone.png';
import mailLogo from '../../assets/img/mail.png';
import facebookLogo from '../../assets/img/facebook-logo.png';
import instagramLogo from '../../assets/img/instagram-logo.png';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <div className="footer-section-one">
                    <div className='title'>Sobre nosotros</div>
                    <span>Nuestro objetivo es rescatar gatos desamparados de la calle para evitar la sobrepoblación de éstos, evitar que sigan sufriendo y eventualmente encuentren un buen hogar.</span>
                </div>
                <div className="footer-section-two">
                    <div className='title'>Enlaces</div>
                    <div className='columns'>
                        <div className="footer-section-columns">
                            <a href="#">Inicio</a>
                            <a href="#">Adopta</a>
                            <a href="#">Eventos</a>
                            <a href="#">Noticias</a>
                        </div>
                        <div className="footer-section-columns">
                            <a href="#">Formas de ayudar</a>
                            <a href="#">Contáctanos</a>
                            <a href="#">Iniciar sesión</a>
                        </div>
                    </div>
                </div>

                <div className="footer-section-three">
                    <div className='title'>Contáctanos</div>
                    <div className="componente-contactanos">
                        <img src={locationLogo} alt="" />
                        <div className='text-contactanos'>
                            <span>SAN SALVADOR, SAN SALVADOR</span>
                            <span>dir más especifica</span>
                        </div>

                    </div>
                    <div className="componente-contactanos">
                        <img src={phoneLogo} alt="" />
                        <div className='text-contactanos'>
                            <span>(503) 7593 8185</span>
                            <span>De lunes a viernes de 8am a 4pm</span>
                        </div>

                    </div>
                    <div className="componente-contactanos">
                        <img src={mailLogo} alt="" />
                        <div className='text-contactanos'>
                            <span>nomrefugio@gmail.com</span>
                            <span>¡Envíanos tu consulta en cualquier momento!</span>
                        </div>


                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <span>Programación Web, 2023</span>
                <div className='redes'>
                    <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                        <img src={facebookLogo} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Instagram" />
                    </a>
                </div>
            </div>

        </div>


    );
};

export default Footer;

