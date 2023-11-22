import React, { useState } from "react";
import './EventCarrousel.css';

const EventCarrousel = ({ events }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleNextEvent = () => {
    const nextIndex = (currentEventIndex + 1) % events.length;
    setCurrentEventIndex(nextIndex);
  };

  const handlePrevEvent = () => {
    const prevIndex = (currentEventIndex - 1 + events.length) % events.length;
    setCurrentEventIndex(prevIndex);
  };

  return (
    <div className="event-carousel">
      <div className="carousel-content">
        <img src={events[currentEventIndex].eventImage} alt={events[currentEventIndex].eventName} />
        <h2>{events[currentEventIndex].eventName}</h2>
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrevEvent}> <p>←</p></button>
        <button onClick={handleNextEvent}><p>→</p></button>
      </div>
    </div>
  );
};

export default EventCarrousel;
