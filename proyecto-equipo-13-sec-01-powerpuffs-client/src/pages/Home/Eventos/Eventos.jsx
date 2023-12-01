import React, { useEffect, useState } from "react";
import "./Eventos.css";
import EventosCard from "../../../components/cards/EventosCard/EventosCard";
import { useUserContext } from "../../../UserContext";

const Eventos = ({ events }) => {
  const { userRole } = useUserContext();
  const [sliceValue, setSliceValue] = useState(-3);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 600 && windowWidth <= 1024) {
        setSliceValue(-2);
      } else {
        setSliceValue(-3);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const latestEvents = events
    .filter((eventItem) => {
      if (userRole === "1" || userRole === "2") {
        return true;
      } else {
        return eventItem.eventStatus.toLowerCase() === "aprobado";
      }
    })
    .slice(sliceValue)
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

