import React, { useState } from "react";
import './EventContainer.css';
import EventosCard from "../../../components/cards/EventosCard/EventosCard";
import { useUserContext } from "../../../UserContext";


function EventContainer({ events }) {

    const { userRole } = useUserContext();
    const [filters, setFilters] = useState({
        location: "",
        date: "",
        eventType: "",
        eventStatus: "",
    });

    const [filteredEvents, setFilteredEvents] = useState(events);
    const [isFilterVisible, setFilterVisibility] = useState(true);
    const [visibleCardCount, setVisibleCardCount] = useState(6);

    const handleFilterChange = (filterName, value) => {
        setFilters({
            ...filters,
            [filterName]: value,
        });
    };

    const handleFilterSubmit = () => {
        const newFilteredEvents = events.filter((event) => {
            const isLocationMatch = !filters.location || event.location.toLowerCase().includes(filters.location.toLowerCase());
            const isDateMatch = !filters.date || event.date.toLowerCase().includes(filters.date.toLowerCase());
            const isEventTypeMatch = !filters.eventType || event.eventType.toLowerCase().includes(filters.eventType.toLowerCase());
            const isEventStatusMatch = !filters.eventStatus || event.eventStatus.toLowerCase().includes(filters.eventStatus.toLowerCase());

            return isLocationMatch && isDateMatch && isEventTypeMatch && isEventStatusMatch;
        });

        setFilteredEvents(newFilteredEvents);
        setVisibleCardCount(6);
    };

    const handleFilterClear = () => {
        setFilters({
            location: "",
            date: "",
            eventType: "",
            eventStatus: "",
        });

        setFilteredEvents(events);
        setVisibleCardCount(6);
    };

    const toggleFilterVisibility = () => {
        setFilterVisibility(!isFilterVisible);
    };

    const handleViewMore = () => {
        setVisibleCardCount((prevCount) => prevCount + 2);
    };

    return (
        <div className="event2-container">
            <div className="event-filter-container">
                <div className="event-filter-txt" >
                    <img id="filter-icon" src="/src/assets/img/Vector.png" alt="Filter-icon" onClick={toggleFilterVisibility} />
                    <h2>Refina tu búsqueda para encontrar eventos que se adapten a tus preferencias.</h2>
                </div>
                {isFilterVisible && (
                    <div className="event-filter">
                        <div className="event-filter-item">
                            <p> Ubicación: </p>
                            <input
                                type="text"
                                placeholder="Ubicación"
                                value={filters.location}
                                onChange={(e) => handleFilterChange("location", e.target.value)}
                            />
                        </div>
                        <div className="event-filter-item">
                            <p> Fecha: </p>
                            <input
                                type="text"
                                placeholder="DD/MM/YY"
                                value={filters.date}
                                onChange={(e) => handleFilterChange("date", e.target.value)}
                            />
                        </div>
                        <div className="event-filter-item">
                            <p> Tipo de evento: </p>
                            <select
                                value={filters.eventType}
                                onChange={(e) => handleFilterChange("eventType", e.target.value)}
                            >
                                <option value="">Selecciona tipo de evento</option>
                                <option value="Recaudación">Recaudación</option>
                                <option value="Campaña de Esterilización">Campaña de Esterilización</option>
                                <option value="Festival de mascotas">Festival de mascotas</option>
                            </select>
                        </div>
                        {userRole === '1' || userRole === '2' ? (
                            <div className="event-filter-item">
                                <p> Status: </p>
                                <select
                                    value={filters.eventStatus}
                                    onChange={(e) => handleFilterChange("eventStatus", e.target.value)}
                                >
                                    <option value="">Selecciona tipo de evento</option>
                                    <option value="pendiente">Pendiente</option>
                                    <option value="aprobado">Aprobado</option>
                                    <option value="declinado">Declinado</option>
                                </select>
                            </div>
                        ) : null}


                        <div className="filter-buttons">
                            <button id="submit" onClick={handleFilterSubmit}>BUSCAR</button>
                            <button id="delete" onClick={handleFilterClear}>BORRAR FILTROS</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="article-container">
                {filteredEvents
                    .filter((event) => {
                        if (userRole === '1' || userRole === '2') {
                            // Show all events for userRole 1 and 2
                            return true;
                        } else {
                            // Hide pending and declined events for other userRoles
                            return event.eventStatus.toLowerCase() === 'aprobado';
                        }
                    })
                    .slice(0, visibleCardCount).map((event, index) => (
                        <EventosCard
                            key={index}
                            date={event.date}
                            eventName={event.eventName}
                            location={event.location}
                            description={event.description}
                            buttonText={event.buttonText}
                            viewType={event.viewType}
                            eventImage={event.eventImage}
                            eventType={event.eventType}
                            eventHour={event.eventHour}
                            eventBudget={event.eventBudget}
                            eventStatus={event.eventStatus}
                            evenyCreatedBy={event.eventCreatedBy}
                        />
                    ))}
                {filteredEvents.length > visibleCardCount && (
                    <div className="view-more-container">
                        <button onClick={handleViewMore}>VER MÁS</button>
                    </div>
                )}
                {filteredEvents.length === 0 && (
                    <div className="no-result">
                        <p>Sin resultados.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventContainer;

