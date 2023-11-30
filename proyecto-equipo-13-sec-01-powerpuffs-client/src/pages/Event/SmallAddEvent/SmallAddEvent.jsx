import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../UserContext';
import grayPhoto from "../../../assets/img/gray-photo.png";
import hour from "../../../assets/img/white-hour.png";
import location from "../../../assets/img/white-location.png";
import dollar from "../../../assets/img/white-dollar.png";
import calendar from "../../../assets/img/white-calendar.png";
import back from "../../../assets/img/Back.png";
import './SmallAddEvent.css';

const SmallAddEvent = () => {
    const { user2 } = useUserContext();
    const navigate = useNavigate();

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

        // Optionally, you can display the file name or perform other actions.
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // State to manage form inputs
    const [eventData, setEventData] = useState({
        eventName: '',
        eventLocation: '',
        eventDate: '',
        eventHour: '',
        eventDescription: '',
        eventImage: '',
        eventType: '',
        eventBudget: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData({
            ...eventData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();



        navigate('/Event');

        if (selectedFile) {
            // Handle the selected file as needed
        }


    };

    return (

        <div className="add-event-containerS">
                <div className={`add-event-modalS ${isSmallScreen ? 'new-window' : ''}`}>
                    <button className="modal-close-buttonS" onClick={() => navigate('/Event')}>
                        <img
                            className="return-btn-EvS"
                            src={back}
                            alt="return arrow"
                        />
                    </button>
                    <div className="small-form">
                    <form id="Small" onSubmit={handleSubmit}>
                        <div className="title-E-picS">
                            <button className="user-pic-EvS">
                                <img
                                    className="profile-pic-EvS"
                                    src={user2?.userProfilePic}
                                    alt="User Profile"
                                />
                            </button>
                            <label>
                                <input type="text" name="eventName" placeholder='Título de evento...' value={eventData.eventName} onChange={handleInputChange} required />
                            </label>
                        </div>

                        <div className="date-loc-h-EvS">
                            <label>
                                <img className="pic-date-EvS" src={calendar} alt="Calendar" />
                                <input type="date" name="eventDate" placeholder='Agregar fecha...' value={eventData.eventDate} onChange={handleInputChange} required />
                            </label>

                            <label>
                                <img className="pic-date-EvS" src={location} alt="location" />
                                <input type="text" name="eventLocation" placeholder='Agregar ubicación...' value={eventData.eventLocation} onChange={handleInputChange} required />
                            </label>
                            <label>
                                <img className="pic-date-EvS" src={hour} alt="clock" />
                                <input type="time" name="eventHour" placeholder='Agregar hora...' value={eventData.eventHour} onChange={handleInputChange} required />
                            </label>
                        </div>


                        <div className="description-cost-EvS">
                            <label>
                                <textarea name="eventDescription" placeholder="Descripción del evento..." value={eventData.eventDescription} onChange={handleInputChange} required />
                            </label>
                            <label id="costoEvS">
                                <img className="pic-date-Ev" src={dollar} alt="money" />
                                <input type='money' name="eventBudget" placeholder="Costo presupuestado" value={eventData.eventBudget} onChange={handleInputChange} required />
                            </label>
                        </div>


                        <div className="submit-tippic-EvS">
                            <div className="tipo-pic-EvS">
                                <label>
                                    <select name="eventType" value={eventData.eventType} onChange={handleInputChange} required>
                                        <option value="">TIPO DE EVENTO</option>
                                        <option value="Recaudación">Recaudación</option>
                                        <option value="Campaña de Esterilización">Campaña de Esterilización</option>
                                        <option value="Festival de mascotas">Festival de mascotas</option>
                                    </select>
                                </label>
                                <label id="subir-foto">
                                    <img
                                        className="pic-modal"
                                        src={grayPhoto}
                                        alt="Photo"
                                    />
                                    <span>FOTO</span>
                                    <input type="file" accept="image/*" name="eventImage" onChange={handleFileChange} required />
                                </label>
                            </div>

                            <button type="submit">GUARDAR EVENTO</button>
                        </div>

                    </form>
                    </div>

                </div>
        </div>
    );
};


export default SmallAddEvent
