// Eventos.jsx

import React from "react";
import "./Eventos.css";
import EventosCard from "../../../components/cards/EventosCard/EventosCard";
import { useUserContext } from "../../../UserContext";

const Eventos = ({ events }) => {

  const { userRole } = useUserContext();

  const latestEvents = events
    .filter((eventItem) => {
      if (userRole === "1" || userRole === "2") {
        return true;
      } else {
        return eventItem.eventStatus.toLowerCase() === "aprobado";
      }
    })
    .slice(-3)
    .reverse();

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
