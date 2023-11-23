import React from "react";
import { NavLink } from "react-router-dom";
import "./Eventos.css";
import EventosCard from "../../../components/cards/EventosCard/EventosCard";

const Eventos = ({ events }) => {

  const latestEvents = events.slice(-3);

  return (

    <div className="staircase-container">
      <div className="card">
        {latestEvents.map((event, index) => (
          <EventosCard
            key={index}
            date={event.date}
            eventName={event.eventName}
            location={event.location}
            description={event.description}
            buttonText={event.buttonText}
            viewType="home"
            eventImage={event.eventImage}
            eventHour={event.eventHour}
          />
        ))}

      </div>


      <div className="eventos-home-info">
        <span className="eventos-home-title">Eventos</span>
        <span className="eventos-home-text">Conoce los eventos que están por realizarse próximamente.</span>
      </div>
    </div>
  );
};

export default Eventos;
