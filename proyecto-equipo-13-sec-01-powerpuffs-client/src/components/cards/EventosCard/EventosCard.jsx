import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventosCard.css';
import locationLogo from "../../../assets/img/location.png";
import dotsLogo from "../../../assets/img/3-dots.png";
import deleteLogo from "../../../assets/img/delete.png";
import editLogo from "../../../assets/img/edit.png";
import { useUserContext } from '../../../UserContext';

const EventosCard = ({ date, eventName, location, description, viewType, eventImage, eventType, eventHour, eventBudget, eventStatus, eventCreatedBy}) => {
  const { userRole } = useUserContext();
  const isHomeView = viewType === 'home';
  const [showDropdown, setShowDropdown] = useState(false);
  

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
    const encodedEventBudget = encodeURIComponent(eventBudget);
    const encodedEventStatus = encodeURIComponent(eventStatus);
    const encodedEventCreatedBy = encodeURIComponent(eventCreatedBy);
  
    navigate(`/EventArticle/${encodedEventName}/${encodedLocation}/${encodedDescription}/${encodedEventImage}/${encodedFullDate}/${encodedEventType}/${encodedEventHour}/${encodedEventBudget}/${encodedEventStatus}/${encodedEventCreatedBy}`); // Update the URL
  };


  const truncatedDescription = description.length > maxDescriptionLength
    ? `${description.substring(0, maxDescriptionLength)}...`
    : description;

  const handleThreeDotsClick = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleEditClick = () => {
    setShowDropdown(false);
  };

  const handleDeleteClick = () => {

    setShowDropdown(false);
  };

  console.log(userRole);

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
          <div className="config-event-box">
            <div className='titulo-evento'>
              <h1>{eventName}</h1>
              </div>
              {userRole === '1' || userRole === '2' ? ( // Show only if roleId is 1 or 2
            <div className="AM-container-event">
              <div className="AM-event-info">
                <span className="sr-only1">{eventBudget}</span>
                <span className="sr-only1">{eventStatus}</span>
                <span className="sr-only1">{eventCreatedBy}</span>
              </div>

              <div className="admin-config-event">
                <button className="three-dots-event" onClick={handleThreeDotsClick}>
                  <img src={dotsLogo} alt="dots-logo" />
                </button>
                {showDropdown && (
                  <div className="dropdown-menu-event">
                    <button onClick={handleEditClick}>
                      <img src={editLogo} alt="edit-logo" />
                    </button>
                    <button onClick={handleDeleteClick}>
                      <img src={deleteLogo} alt="delete-logo" />
                    </button>
                  </div>
                )}
              </div>
              </div>
            ) : null}
          </div>

          <div className='ubicacion'>
            <img src={locationLogo} alt="location" />
            <p>{location}</p>
          </div>
          <div className='descripcion'>
            <p>{truncatedDescription}</p>
          </div>

          <div className="config-event-box2">

          {userRole === '1' || userRole === '2' ? ( // Show only if roleId is 1 or 2
            <div className="dropdown-menu-event2">
              <button onClick={handleEditClick}>
                <img src={editLogo} alt="edit-logo" />
              </button>
              <button onClick={handleDeleteClick}>
                <img src={deleteLogo} alt="delete-logo" />
              </button>
            </div>
            ) : null}
            <button className='mas-info-event' onClick={handleButtonClick}>
              MÁS INFORMACIÓN
            </button>
          </div>



        </div>
      </div>
    </div>
  );
};

export default EventosCard;