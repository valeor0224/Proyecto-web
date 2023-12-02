import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../UserContext';
import grayPhoto from "../../../assets/img/photos.png";
import location from "../../../assets/img/white-location.png";
import calendar from "../../../assets/img/white-calendar.png";
import back from "../../../assets/img/Back.png";
import './SmallAddNews.css';

const SmallAddNews = () => {
    const { user2 } = useUserContext();
    const navigate = useNavigate();

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

    const [newsData, setNewsData] = useState({
        newsTitle: '',
        location: '',
        dateCreated: '',
        description: '',
        newsImage: '',
        newsType: '',
        newsCreatedBy: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewsData({
            ...newsData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();



        navigate('/news');

        if (selectedFile) {
            // Handle the selected file as needed
        }


    };

    return (

        <div className="add-event-containerS">
                <div className={`add-event-modalSN ${isSmallScreen ? 'new-window' : ''}`}>
                    <button className="modal-close-buttonS" onClick={() => navigate('/news')}>
                        <img
                            className="return-btn-EvSN"
                            src={back}
                            alt="return arrow"
                        />
                    </button>
                    <div className="small-formN">
                    <form id="SmallN" onSubmit={handleSubmit}>
                        <div className="title-E-picSN">
                            <button className="user-pic-EvSN">
                                <img
                                    className="profile-pic-EvSN"
                                    src={user2?.userProfilePic}
                                    alt="User Profile"
                                />
                            </button>
                            <label>
                                <input type="text" name="newsTitle" placeholder='Título de noticia...' value={newsData.newsTitle} onChange={handleInputChange} required />
                            </label>
                        </div>

                        <div className="date-loc-h-EvSN">
                            <label>
                                <img className="pic-date-EvSN" src={calendar} alt="Calendar" />
                                <input type="date" name="dateCreated" placeholder='Agregar fecha...' value={newsData.dateCreated} onChange={handleInputChange} required />
                            </label>

                            <label>
                                <img className="pic-date-EvSN" src={location} alt="location" />
                                <input type="text" name="location" placeholder='Agregar ubicación...' value={newsData.location} onChange={handleInputChange} required />
                            </label>
                        </div>


                        <div className="description-cost-EvSN">
                            <label>
                                <textarea name="description" placeholder="Descripción del artículo..." value={newsData.description} onChange={handleInputChange} required />
                            </label>
                        </div>


                        <div className="submit-tippic-EvSN">
                            <div className="tipo-pic-EvSN">
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
                                    <input type="file" accept="image/*" name="newsImage" onChange={handleFileChange} required />
                                </label>
                            </div>

                            <button type="submit">GUARDAR NOTICIA</button>
                        </div>

                    </form>
                    </div>

                </div>
        </div>
    );
};


export default SmallAddNews
