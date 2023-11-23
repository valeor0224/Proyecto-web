import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventosCard.css';
import locationLogo from "../../../assets/img/location.png";

const EventosCard = ({ date, eventName, location, description, viewType, eventImage, eventType, eventHour }) => {
  const isHomeView = viewType === 'home';


  const getMonthAbbreviation = (month) => {
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return monthNames[parseInt(month, 10) - 1];
  };

  const [day, month, year] = date.split('/');

  const navigate = useNavigate();

  const maxDescriptionLength = isHomeView ? 40 : 90;


  const handleButtonClick = () => {
    const encodedEventName = encodeURIComponent(eventName);
    const encodedLocation = encodeURIComponent(location);
    const encodedDescription = encodeURIComponent(description);
    const encodedEventImage = encodeURIComponent(eventImage);
    const encodedFullDate = encodeURIComponent(`${getMonthAbbreviation(month)} ${day}, ${year}`);
    const encodedEventType = encodeURIComponent(eventType);
    const encodedEventHour = encodeURIComponent(eventHour); 

    navigate(`/EventArticle/${encodedEventName}/${encodedLocation}/${encodedDescription}/${encodedEventImage}/${encodedFullDate}/${encodedEventType}/${encodedEventHour}`); // Update the URL
  };


  const truncatedDescription = description.length > maxDescriptionLength
    ? `${description.substring(0, maxDescriptionLength)}...`
    : description;



  return (
    <div className={`eventos-container ${isHomeView ? 'home-view' : 'event-view'}`}>
      <div className='eventos-card-container'>

        <div className='cont-superior'>
          <div className='cuadro-fecha'>
            <h1>{`${day} ${getMonthAbbreviation(month)}`}</h1>
            <span className='sr-only'>{year}</span>
            <span className='sr-only'>{eventHour}</span>
          </div>

          <div className={`img-cont ${isHomeView ? 'img-cont-hidden' : 'img-cont-visible'}`}>
            <img src={eventImage} alt="event-img" />
          </div>
        </div>

        <div className='cuadro-informacion'>

          <div className='titulo-evento'>
            <h1>{eventName}</h1>
          </div>

          <div className='ubicacion'>
            <img src={locationLogo} alt="location" />
            <p>{location}</p>
          </div>
          <div className='descripcion'>
            <p>{truncatedDescription}</p>
          </div>
          

          <button className='mas-info' onClick={handleButtonClick}>
            MÁS INFORMACIÓN
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventosCard;