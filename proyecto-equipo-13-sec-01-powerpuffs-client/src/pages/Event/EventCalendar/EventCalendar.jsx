import React from "react";
import { NavLink } from "react-router-dom";
import './EventCalendar.css';
//import personaLogo from "";
const EventCalendar = () => {

    return (
        <div className="calendarizacion-container">

            <div className="calendarizacion-text">
                <h1>Calendarización mensual de eventos</h1>
            </div>
            <div className="calendar-container">
                <div className="paso">
                   
                    <span></span>
                </div>

            </div>

        </div>


    );

};


export default EventCalendar