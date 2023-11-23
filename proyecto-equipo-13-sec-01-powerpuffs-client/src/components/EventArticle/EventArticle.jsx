import React from 'react';
import { useParams } from 'react-router-dom';
import './EventArticle.css';
import EventosCard from '../cards/EventosCard/EventosCard';
import locationLogo from "../../assets/img/gray-location.png";
import calendarLogo from "../../assets/img/calendar-icon.png";
import SHARELogo from "../../assets/img/SHARE.png";
import hourLogo from "../../assets/img/hour.png";


const EventArticle = ({ events }) => {

  const { eventName, location, description, eventImage, fullDate, eventType, eventHour } = useParams();
  const latestEvents = events.slice(-3);

  return (
    <div className='page-section'>
      <div className="event-article-container">

        <div className='titulo-evento2'>
          <h1>{eventName}</h1>
        </div>
        <div className='ubicacion2'>
        <div className="image-ubicacion">
             <img src={locationLogo} alt="location-logo" />
          </div>
          <p>{location}</p>
        </div>

        <div className='fecha2'>
          <div className="image-calendar">
             <img src={calendarLogo} alt="location-logo" />
          </div>
          <p>{fullDate}</p>
        </div>

        <div className='hora2'>
          <div className="image-calendar">
             <img src={hourLogo} alt="location-logo" />
          </div>
          <p>{eventHour}</p>
        </div>

        <div className='tipo-evento2'>
          
          <p>{eventType}</p>
        </div>

        <div className='img-visible2'>
          <img src={eventImage} alt="event-img" />
        </div>

        <div className="share-button-cont">
          <button className="share-button">
            <div className="img-cont2">
            <img src={SHARELogo} alt="share-logo" />
            </div>
            <p>COMPARTIR</p>
          </button>
        </div>
        
        <div className='descripcion2'>
          <p>{description}</p>
        </div>

        <div className="assist-button-cont">
          <button className="assist-button">
            ASISTIR AL EVENTO
          </button>
        </div>
        
      </div>

      <div className="side-bar">

        <div className="map-container">
         <img src="https://developers.google.com/static/maps/images/landing/hero_mobile_maps_sdks.png" alt="" />
        </div>

        <div className="other-event-cont2">
        <h2>Eventos</h2>
        <span>Conoce los eventos que están por realizarse próximamente.</span>

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
          eventType={event.eventType}
          eventHour={event.eventHour}
        />
      ))}
      
        </div>
      </div>
    </div>
  );
};

export default EventArticle;

