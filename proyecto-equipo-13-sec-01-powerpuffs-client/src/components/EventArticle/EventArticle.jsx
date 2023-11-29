import React from 'react';
import { useParams } from 'react-router-dom';
import './EventArticle.css';
import EventosCard from '../cards/EventosCard/EventosCard';
import locationLogo from "../../assets/img/gray-location.png";
import calendarLogo from "../../assets/img/calendar-icon.png";
import SHARELogo from "../../assets/img/SHARE.png";
import hourLogo from "../../assets/img/hour.png";
import dollarLogo from "../../assets/img/dollar.png";
import { useUserContext } from '../../UserContext';


const EventArticle = ({ events }) => {
  const { userRole } = useUserContext();

  const { eventName, location, description, eventImage, fullDate, eventType, eventHour, eventBudget, eventStatus, eventCreatedBy } = useParams();

  const currentIndex = events.findIndex(eventItem => eventItem.eventName === eventName);

  console.log(userRole);

  const latestEvents = events
    .filter((_, index) => index !== currentIndex)
    .filter((eventItem) => {
      if (userRole === '1' || userRole === '2') {
        return true;
      } else {
        return eventItem.eventStatus.toLowerCase() === 'aprobado';
      }
    })
    .slice(-3)
    .reverse();


  return (
    <div className='page-section'>
      <div className="event-article-container">
        <div className="event-data">

          <div className="event-general-data">
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
          </div>
          {userRole === '1' || userRole === '2' ? (
            <div className="AM-data">
              <div className='budget'>
                <div className="image-calendar">
                  <img src={dollarLogo} alt="location-logo" />
                </div>
                <p>{eventBudget}</p>
              </div>
              <div className='event-Status'>
                <h3>Estado de solicitud:</h3>
                <p>{eventStatus}</p>
              </div>
              <div className='event-createdby'>
                <h3>Evento creado por:</h3>
                <p>{eventCreatedBy}</p>
              </div>

            </div>
          ) : null}

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
        {userRole === '1' ? (
          <div className="approve-disapprove-cont">
            <button className="approve-button">
              APROBAR
            </button>
            <button className="decline-button">
              DECLINAR
            </button>
          </div>
        ) : userRole === '2' ? (
          <div className="blank-div" >

          </div>
        ) : (
          <div className="assist-button-cont">
            <button className="assist-button">
              ASISTIR AL EVENTO
            </button>
          </div>
        )}

      </div>

      <div className="side-bar">

        <div className="map-container">
          <img src="https://developers.google.com/static/maps/images/landing/hero_mobile_maps_sdks.png" alt="" />
        </div>

        <div className="other-event-cont2">
          <h2>Eventos</h2>
          <span>Conoce los eventos que están por realizarse próximamente.</span>

          {latestEvents.map((eventItem, index) => (
            <EventosCard
              key={index}
              date={eventItem.date}
              eventName={eventItem.eventName}
              location={eventItem.location}
              description={eventItem.description}
              buttonText={eventItem.buttonText}
              viewType="home"
              eventImage={eventItem.eventImage}
              eventType={eventItem.eventType}
              eventHour={eventItem.eventHour}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventArticle;

