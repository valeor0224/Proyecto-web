import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../UserContext';
import grayPhoto from "../../../assets/img/gray-photo.png";
import hour from "../../../assets/img/white-hour.png";
import location from "../../../assets/img/white-location.png";
import dollar from "../../../assets/img/white-dollar.png";
import calendar from "../../../assets/img/white-calendar.png";
import back from "../../../assets/img/white-Back.png";
import './AddEvent.css';

const AddEvent = () => {
    const { user2 } = useUserContext();
    const navigate = useNavigate();
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


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData({
            ...eventData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your logic to save the event data (eventData) to the backend or state
        // ...

        // Close the modal after adding the event
        setIsModalOpen(false);

        // Check if the screen size is small
        const isSmallScreen = window.innerWidth <= 600;

        if (isSmallScreen) {
            window.open('/Event', '_blank');
        } else {
            navigate('/Event');
        }


        if (selectedFile) {
            // Handle the selected file as needed
        }

    };

    return (

        <div className="add-event-container">
            {!isModalOpen && (
                <div className="add-event-trigger" onClick={() => {
                    // Check if the screen size is small
                    const isSmallScreen = window.innerWidth <= 600;

                    // If the screen is small, navigate to '/SmallAddEvent', else open the modal
                    isSmallScreen ? navigate('/SmallAddEvent') : setIsModalOpen(true);
                }}>

                    <button className="user-pic-E">
                        <img
                            className="profile-pic-E"
                            src={user2?.userProfilePic}
                            alt="User Profile"
                        />
                    </button>
                    <div className="modal-txt-btn">
                        <div className="modal-placeholder">
                            Agregar evento...
                        </div>
                        <button className="upload-pic-modal">
                            <img
                                className="pic-modal"
                                src={grayPhoto}
                                alt="Photo"
                            />
                            SUBIR FOTO
                        </button>
                    </div>

                </div>
            )}

            {/* Modal window */}
            {isModalOpen && (
                <div className={`add-event-modal ${isSmallScreen ? 'new-window' : ''}`}>
                    <button className="modal-close-button" onClick={() => setIsModalOpen(false)}>
                        <img
                            className="return-btn-Ev"
                            src={back}
                            alt="return arrow"
                        />
                    </button>

                    
                    <form onSubmit={handleSubmit}>
                        <div className="title-E-pic">
                            <button className="user-pic-Ev">
                                <img
                                    className="profile-pic-Ev"
                                    src={user2?.userProfilePic}
                                    alt="User Profile"
                                />
                            </button>
                            <label>
                                <input type="text" name="eventName" placeholder='Título de evento...' value={eventData.eventName} onChange={handleInputChange} required />
                            </label>
                        </div>
                        <div className="date-loc-h-Ev">
                            <label>
                                <img className="pic-date-Ev" src={calendar} alt="Calendar" />
                                <input type="date" name="eventDate" placeholder='Agregar fecha...' value={eventData.eventDate} onChange={handleInputChange} required />
                            </label>

                            <label>
                                <img className="pic-date-Ev" src={location} alt="location" />
                                <input type="text" name="eventLocation" placeholder='Agregar ubicación...' value={eventData.eventLocation} onChange={handleInputChange} required />
                            </label>
                            <label>
                                <img className="pic-date-Ev" src={hour} alt="clock" />
                                <input type="time" name="eventHour" placeholder='Agregar hora...' value={eventData.eventHour} onChange={handleInputChange} required />
                            </label>
                        </div>


                        <div className="description-cost-Ev">
                            <label>
                                <textarea name="eventDescription" placeholder="Descripción del evento..." value={eventData.eventDescription} onChange={handleInputChange} required />
                            </label>
                            <label id="costoEv">
                                <img className="pic-date-Ev" src={dollar} alt="money" />
                                <input type='money' name="eventBudget" placeholder="Costo presupuestado" value={eventData.eventBudget} onChange={handleInputChange} required />
                            </label>
                        </div>


                        <div className="submit-tippic-Ev">
                            <div className="tipo-pic-Ev">
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
            )}
        </div>
    );
};

export default AddEvent;
