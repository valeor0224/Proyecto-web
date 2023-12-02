import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../UserContext';
import grayPhoto from "../../../assets/img/photos.png";
import location from "../../../assets/img/white-location.png";
import calendar from "../../../assets/img/white-calendar.png";
import back from "../../../assets/img/white-Back.png";
import './AddNews.css';

const AddNews = () => {
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
    const [newsData, setNewsData] = useState({
        newsTitle: '',
        location: '',
        dateCreated: '',
        description: '',
        newsImage: '',
        newsType: '',
        newsCreatedBy: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewsData({
            ...newsData,
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
            window.open('/news', '_blank');
        } else {
            navigate('/news');
        }


        if (selectedFile) {
            // Handle the selected file as needed
        }

    };

    return (

        <div className="add-news-container">
            {!isModalOpen && (
                <div className="add-news-trigger" onClick={() => {
                    // Check if the screen size is small
                    const isSmallScreen = window.innerWidth <= 600;

                    // If the screen is small, navigate to '/SmallAddEvent', else open the modal
                    isSmallScreen ? navigate('/SmallAddNews') : setIsModalOpen(true);
                }}>

                    <button className="user-pic-N">
                        <img
                            className="profile-pic-N"
                            src={user2?.userProfilePic}
                            alt="User Profile"
                        />
                    </button>
                    <div className="modal-txt-btn-N">
                        <div className="modal-placeholder-N">
                            Agregar evento...
                        </div>
                        <button className="upload-pic-modal-N">
                            <img
                                className="pic-modal-N"
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
                <div className={`add-event-modal-N ${isSmallScreen ? 'new-window' : ''}`}>
                    <button className="modal-close-button-N" onClick={() => setIsModalOpen(false)}>
                        <img
                            className="return-btn-No"
                            src={back}
                            alt="return arrow"
                        />
                    </button>

                    
                    <form onSubmit={handleSubmit}>
                        <div className="title-N-pic">
                            <button className="user-pic-No">
                                <img
                                    className="profile-pic-No"
                                    src={user2?.userProfilePic}
                                    alt="User Profile"
                                />
                            </button>
                            <label>
                                <input type="text" name="newsTitle" placeholder='Título de noticia...' value={newsData.newsTitle} onChange={handleInputChange} required />
                            </label>
                        </div>
                        <div className="date-loc-h-No">
                            <label>
                                <img className="pic-date-No" src={calendar} alt="Calendar" />
                                <input type="date" name="dateCreated" placeholder='Agregar fecha...' value={newsData.dateCreated} onChange={handleInputChange} required />
                            </label>

                            <label>
                                <img className="pic-date-No" src={location} alt="location" />
                                <input type="text" name="location" placeholder='Agregar ubicación...' value={newsData.location} onChange={handleInputChange} required />
                            </label>
                        </div>


                        <div className="description-cost-No">
                            <label>
                                <textarea name="description" placeholder="Descripción del artículo..." value={newsData.description} onChange={handleInputChange} required />
                            </label>
                        </div>


                        <div className="submit-tippic-No">
                            <div className="tipo-pic-No">
                                <label>
                                    <select name="newsType" value={newsData.newsType} onChange={handleInputChange} required>
                                        <option value="">TIPO DE NOTICIA</option>
                                        <option value="Recomendaciones">Recomendaciones</option>
                                        <option value="Success Story">Success Story</option>
                                        <option value="Festival de mascotas">Blog</option>
                                        <option value="Servicio Social">Servicio Social</option>
                                    </select>
                                </label>
                                <label id="subir-foto-No">
                                    <img
                                        className="pic-modal-No"
                                        src={grayPhoto}
                                        alt="Photo"
                                    />
                                    <span>FOTO</span>
                                    <input type="file" accept="image/*" name="NewImage" onChange={handleFileChange} required />
                                </label>
                            </div>

                            <button type="submit">GUARDAR NOTICIA</button>
                        </div>

                    </form>
                    </div>
            )}
        </div>
    );
};

export default AddNews;