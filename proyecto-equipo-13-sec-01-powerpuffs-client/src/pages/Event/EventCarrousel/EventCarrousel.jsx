import React, { useState, useEffect } from "react";
import './EventCarrousel.css';

const EventCarrousel = ({ events }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [eventsAvailable, setEventsAvailable] = useState(false);

  useEffect(() => {
    // Check if events are available
    if (events.length > 0) {
      setEventsAvailable(true);
      // Set the initial index based on the first approved event
      let initialIndex = 0;
      while (
        initialIndex < events.length &&
        (events[initialIndex].eventStatus.toLowerCase() === 'pendiente' ||
          events[initialIndex].eventStatus.toLowerCase() === 'declinado')
      ) {
        initialIndex++;
      }
      setCurrentEventIndex(initialIndex);
    }
  }, [events]);

  useEffect(() => {
    // Set up automatic rotation every 5 seconds when events are available
    if (eventsAvailable) {
      const rotationInterval = setInterval(() => {
        setCurrentEventIndex((currentIndex) => getNextIndex(currentIndex, events));
      }, 7000);

      return () => clearInterval(rotationInterval);
    }
  }, [eventsAvailable, events]);

  const getNextIndex = (currentIndex, events) => {
    let nextIndex = (currentIndex + 1) % events.length;
    while (
      nextIndex !== currentIndex &&
      (events[nextIndex].eventStatus.toLowerCase() === 'pendiente' || 
       events[nextIndex].eventStatus.toLowerCase() === 'declinado')
    ) {
      nextIndex = (nextIndex + 1) % events.length;
    }
    return nextIndex;
  };

  const getPrevIndex = (currentIndex, events) => {
    let prevIndex = (currentIndex - 1 + events.length) % events.length;
    while (
      prevIndex !== currentIndex &&
      (events[prevIndex].eventStatus.toLowerCase() === 'pendiente' || 
       events[prevIndex].eventStatus.toLowerCase() === 'declinado')
    ) {
      prevIndex = (prevIndex - 1 + events.length) % events.length;
    }
    return prevIndex;
  };

  const handlePrevEvent = () => {
    const prevIndex = getPrevIndex(currentEventIndex, events);
    setCurrentEventIndex(prevIndex);
  };

  const handleNextEvent = () => {
    const nextIndex = getNextIndex(currentEventIndex, events);
    setCurrentEventIndex(nextIndex);
  };

  const currentEvent = events[currentEventIndex];

  if (!eventsAvailable) {
    return <p>Loading...</p>;
  }
  
  const showImage = currentEvent && currentEvent.eventStatus.toLowerCase() === 'aprobado';

  return (
    <div className="event-carousel">
      <div className="carousel-content">
        {showImage ? (
          <>
            <img src={currentEvent.eventImage} alt={currentEvent.eventName} />
            <h2>{currentEvent.eventName}</h2>
          </>
        ) : (
          <p>No approved events available in the carousel.</p>
        )}
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrevEvent}> <p>←</p></button>
        <button onClick={handleNextEvent}> <p>→</p></button>
      </div>
    </div>
  );
};

export default EventCarrousel;
