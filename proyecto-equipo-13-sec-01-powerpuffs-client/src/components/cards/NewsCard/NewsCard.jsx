import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import locationLogo from "../../../assets/img/location.png";
import dotsLogo from "../../../assets/img/3-dots.png";
import deleteLogo from "../../../assets/img/delete.png";
import editLogo from "../../../assets/img/edit.png";
import { useUserContext } from '../../../UserContext';

import './NewsCard.css';


const NewsCard = ({ dateCreated, newsTitle, location, description, viewType, newsImage, newsType, newsCreatedBy }) => {
    const isArticleView = viewType === 'article';

    const [day, month, year] = dateCreated.split('/');

    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const { user2 } = useUserContext();

    const maxDescriptionLength = isArticleView ? 100 : 160;

    const handleButtonClick = () => {
        navigate(`/NewsArticle?newsTitle=${newsTitle}&location=${location}&description=${description}&newsImage=${newsImage}&dateCreated=${dateCreated}&newsType=${newsType}&newsCreatedBy=${newsCreatedBy}`);
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

    return (
        <div className={`news-containerNews ${isArticleView ? 'article-view' : 'news-view'}`}>
            <div className='news-card-containerNews'>

                <div className='cont-izquierdoNews'>

                    <div className={`img-contNews ${isArticleView ? 'img-cont-hiddenNews' : 'img-cont-visibleNews'}`}>
                        <img id="imgNews" src={newsImage} alt="imgNews" />
                    </div>
                </div>

                <div className='cuadro-informacionNews'>
                    <div className="config-news-box">
                        <div className='titulo-noticiaNews'>
                            <h1>{newsTitle}</h1>
                        </div>
                        {user2?.roleId === '1' || user2?.roleId === '2' ? ( // Show only if roleId is 1 or 2
                            <div className="AM-container-news">
                                <div className="AM-news-info">
                                    <span className="sr-only2">{newsCreatedBy}</span>
                                </div>

                                <div className="admin-config-news">
                                    <button className="three-dots-news" onClick={handleThreeDotsClick}>
                                        <img src={dotsLogo} alt="dots-logo" />
                                    </button>
                                    {showDropdown && (
                                        <div className="dropdown-menu-news">
                                            <button id="edit" onClick={handleEditClick}>
                                                <img src={editLogo} alt="edit-logo" />
                                            </button>
                                            <button id="del" onClick={handleDeleteClick}>
                                                <img src={deleteLogo} alt="delete-logo" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="fecha-y-tipoNews">

                        <div className='cuadro-fechaNews'>
                            <h1>{`${day}/${month}/${year}`}</h1>
                        </div>

                        <div className="tipo-noticiaNews">
                            <h1>{newsType}</h1>
                        </div>
                    </div>

                    <div className='descripcionNews'>
                        <p>{truncatedDescription}</p>
                    </div>

                    <button className="mas-infoNews" onClick={handleButtonClick}>
                        Leer más
                    </button>



                    <div className="config-news-box2">

                        <div className='ubicacionNews'>
                            <img src={locationLogo} alt="location" />
                            <p>{location}</p>
                        </div>

                        {user2?.roleId === '1' || user2?.roleId === '2' ? (  // Show only if roleId is 1 or 2
                            <div className="dropdown-menu-news2">
                                <button onClick={handleEditClick}>
                                    <img src={editLogo} alt="edit-logo" />
                                </button>
                                <button onClick={handleDeleteClick}>
                                    <img src={deleteLogo} alt="delete-logo" />
                                </button>
                            </div>
                        ) : null}

                    </div>




                </div>
            </div>
        </div>
    );
};

export default NewsCard;

