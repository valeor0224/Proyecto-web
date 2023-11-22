import React from "react";
import { NavLink } from "react-router-dom";
import "./Eventos.css";
import EventosCard from "../../../cards/EventosCard/EventosCard";

const Eventos = () => {
  return (
    
      <div className="staircase-container">
        <div className="card">
          <EventosCard />
        </div>
        <div className="card">
          <EventosCard />
        </div>
        <div className="card">
          <EventosCard />
        </div>
     
      <div className="eventos-home-info">
        <span className="eventos-home-title">Eventos</span>
        <span className="eventos-home-text">Conoce los eventos que están por realizarse próximamente.</span>
      </div>
    </div>
  );
};

export default Eventos;
