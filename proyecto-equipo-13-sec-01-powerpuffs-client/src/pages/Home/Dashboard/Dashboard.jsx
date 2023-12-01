import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { formSubmissions, donationsA, events, news } from '../../../components/initial-data';
import { useUserContext } from '../../../UserContext';
import EventosCard from '../../../components/cards/EventosCard/EventosCard';

import dollar from '../../../assets/img/dollar.png'
import calendar from '../../../assets/img/calendar-icon.png'
import grayLocation from '../../../assets/img/gray-location.png'
import NewsCard from '../../../components/cards/NewsCard/NewsCard';

const Dashboard = () => {


    const { user2 } = useUserContext();
    const navigate = useNavigate();



    if (user2?.roleId === '1') {

        const sortedFormSubmissions = formSubmissions.sort((a, b) => new Date(b.submissionDate) - new Date(a.submissionDate));
        const lastThreeFormSubmissions = sortedFormSubmissions.slice(0, 3);

        const sortedDonations = donationsA.sort((a, b) => new Date(b.fechaTrans) - new Date(a.fechaTrans));
        const lastThreeDonations = sortedDonations.slice(0, 3);


        const pendingEvents = events.filter((event) => event.eventStatus.toLowerCase() === 'pendiente');
        const sortedPendingEvents = pendingEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
        const lastThreePendingEvents = sortedPendingEvents.slice(0, 3);

        const handleEventCardClick = (event) => {
            const {
                eventName,
                location,
                description,
                eventImage,
                date,
                eventType,
                eventHour,
                eventBudget,
                eventStatus,
                eventCreatedBy,
            } = event;

            const encodedEventName = encodeURIComponent(eventName);
            const encodedLocation = encodeURIComponent(location);
            const encodedDescription = encodeURIComponent(description);
            const encodedEventImage = encodeURIComponent(eventImage);
            const encodedFullDate = encodeURIComponent(date);
            const encodedEventType = encodeURIComponent(eventType);
            const encodedEventHour = encodeURIComponent(eventHour);
            const encodedEventBudget = encodeURIComponent(eventBudget);
            const encodedEventStatus = encodeURIComponent(eventStatus);
            const encodedEventCreatedBy = encodeURIComponent(eventCreatedBy);

            navigate(`/EventArticle/${encodedEventName}/${encodedLocation}/${encodedDescription}/${encodedEventImage}/${encodedFullDate}/${encodedEventType}/${encodedEventHour}/${encodedEventBudget}/${encodedEventStatus}/${encodedEventCreatedBy}`);
        };

        //console.log('All events:', events);
        //console.log('Pending events:', pendingEvents);
        //console.log('Last three pending events:', lastThreePendingEvents);



        return (
            <div className='dashboard-container'>
                <div className="dash-title">
                    <h1>Dashboard</h1>
                </div>
                <div className="dash-content">

                    <div className="dash-item">
                        <h2>
                            40
                        </h2>
                        <p>Adopciones en proceso</p>
                    </div>
                    <div className="dash-item">
                        <h2>
                            40
                        </h2>
                        <p>Adopciones finalizadas</p>
                    </div>
                    <div className="dash-item">
                        <div className="inbox-msg">
                            <h2>
                                40
                            </h2>
                            <h3>mensajes no leídos</h3>
                        </div>
                        <p>Bandeja de entrada</p>
                    </div>
                    <div className="dash-item" id="recaudaciones">
                        <h2>
                            $1240.50
                        </h2>
                        <p>Recaudaciones</p>
                    </div>
                </div>
                <div className="admin-tools-container">
                    <div className="adop-dona">

                        <div className="solicitudes-adop2">
                            <h1>
                                Solicitudes de adopción
                            </h1>

                            <div className="adop-cards-cont">
                                <div className="card-titles-adop">
                                    <p>Usuario</p>
                                    <p>Fecha de solicitud</p>
                                    <p>Estado de solicitud</p>
                                </div>

                                {lastThreeFormSubmissions.length > 0 && (
                                    <div className="solicitudes-adop">
                                        {lastThreeFormSubmissions.map((submission, index) => (
                                            <div key={index} className="card-adop-admin">
                                                <p>{submission.nombre} {submission.apellido}</p>
                                                <p> {submission.submissionDate}</p>
                                                <p>{submission.formStatus}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>

                        </div>

                        <div className="solicitudes-dona">
                            <h1>
                                Donaciones
                            </h1>
                            <div className="adop-cards-cont">
                                <div className="card-titles-adop">
                                    <p>Usuario</p>
                                    <p>Fecha de solicitud</p>
                                    <p>Monto</p>
                                </div>

                                {lastThreeDonations.length > 0 && (
                                    <div className="solicitudes-adop">
                                        {lastThreeDonations.map((donationsA, index) => (
                                            <div key={index} className="card-dona-admin">
                                                <p>{donationsA.name} {donationsA.apellido}</p>
                                                <p> {donationsA.fechaTrans}</p>
                                                <p>{donationsA.amount}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>

                    {lastThreePendingEvents.length > 0 && (
                        <div className="solicitudes-eve">
                            <h1>Solicitudes de eventos</h1>
                            {lastThreePendingEvents.length > 0 ? (
                                <div className="card-eve-admin">
                                    {lastThreePendingEvents.map((event, index) => (
                                        <div key={index} className="event-card-adminpg" onClick={() => handleEventCardClick(event)}>
                                            <p id='ev-title'>{event.eventName}</p>
                                            <div className="info-grid-ev">
                                                <div className="grid-item-ev">
                                                    <img src={calendar} alt="calendar" />
                                                    <p>{event.date}</p>
                                                </div>
                                                <div className="grid-item-ev">
                                                    <img src={grayLocation} alt="location" />
                                                    <p>{event.location}</p>
                                                </div>
                                                <div className="grid-item-ev">
                                                    <img src={dollar} alt="cost" />
                                                    <p>{event.eventBudget}</p>
                                                </div>
                                                <div className="grid-item-ev">
                                                    <p id='ev-type'>{event.eventType}</p>
                                                </div>
                                            </div>
                                            <div className="ev-stat-ad">
                                                <p id='ev-txt'>Estado de solicitud:</p>
                                                <p id='ev-stat'>{event.eventStatus}</p>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            ) : (<p>No hay solicitudes de eventos pendientes.</p>
                            )}
                        </div>
                    )}



                </div>
            </div>
        );
    }

    if (user2?.roleId === '2') {

        const latestEvents = events
            .filter((event) => new Date(event.date) > new Date())
            .slice(-2)
            .reverse();

        const latestNews = news
            .slice(-2) // Change this line to -3 to get the last 3 news articles
            .reverse();

        console.log('Latest News:', latestNews);
        console.log('All News:', news);


        return (
            <div className='dashboard-container'>
                <div className="dash-title">
                    <h1>Dashboard</h1>
                </div>
                <div className="dash-content">

                    <div className="dash-item">
                        <h2>
                            40
                        </h2>
                        <p>Adopciones en proceso</p>
                    </div>
                    <div className="dash-item">
                        <h2>
                            40
                        </h2>
                        <p>Adopciones finalizadas</p>
                    </div>
                    <div className="dash-item">
                        <div className="inbox-msg">
                            <h2>
                                40
                            </h2>
                            <h3>mensajes no leídos</h3>
                        </div>
                        <p>Bandeja de entrada</p>
                    </div>
                </div>
                <div className="admin-tools-container">
                    <div className="ev-cont-mod">
                        <h1 id='ev-title-mod'>
                            Eventos
                        </h1>
                        <div className="grid-ev-mod">
                        {latestEvents.map((event, index) => (
                            <div key={index} className="card-ev">
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
                        </div>
                        
                    </div>

                    <div className="cont-mod-news">
                        <h1>
                            Noticias
                        </h1>
                        <div className="grid-noti-mod">
                        {latestNews.map((news, index) => (
                            <div key={index} className="card-noti">
                                <NewsCard
                                    dateCreated={news.dateCreated}
                                    newsTitle={news.newsTitle}
                                    location={news.location}
                                    description={news.description}
                                    buttonText={news.buttonText}
                                    viewType="article"
                                    newsImage={news.newsImage}
                                    newsType={news.newsType}
                                />
                            </div>
                        ))}

                        </div>
                        
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className='dash-board-container2'>

        </div>
    );
};

export default Dashboard;
