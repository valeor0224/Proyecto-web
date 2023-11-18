import React from "react";
import { NavLink } from "react-router-dom";
import "./Eventos.css";
import EventosCard from "../../../cards/EventosCard/EventosCard";

const Eventos = () => {
    return (
      <div className='eventos-container'>
        <div className="eventos-cards-home">
        <EventosCard/> 
        </div>
        <span>Eventos</span>
        <span>Conoce los eventos que están por realizarse próximamente.</span>
            
      </div>
    );
  };
  
  export default Eventos;