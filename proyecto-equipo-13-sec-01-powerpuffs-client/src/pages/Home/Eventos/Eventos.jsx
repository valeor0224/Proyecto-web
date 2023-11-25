// Eventos.jsx

import React from "react";
import "./Eventos.css";
import EventosCard from "../../../components/cards/EventosCard/EventosCard";

const Eventos = ({ events }) => {
  const latestEvents = events.slice(-3);

  return (
    <div className="staircase-container">
      {latestEvents.map((event, index) => (
        <div key={index} className="card">
          <EventosCard
            date={event.date}
            eventName={event.eventName}
            location={event.location}
            description={event.description}
            buttonText={event.buttonText}
            viewType="home"
            eventImage={event.eventImage}
            eventType={event.eventType}
            eventHour={event.eventHour}
          />
        </div>
      ))}

      <div className="eventos-home-info">
        <span className="eventos-home-title">Eventos</span>
        <span className="eventos-home-text">Conoce los eventos que están por realizarse próximamente.</span>
      </div>
    </div>
  );
};

export default Eventos;
