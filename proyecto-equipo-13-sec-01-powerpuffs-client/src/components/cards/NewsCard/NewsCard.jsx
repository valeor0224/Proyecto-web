import React from 'react';
import { useNavigate } from 'react-router-dom';
import locationLogo from "../../../assets/img/location.png";

import './NewsCard.css';

/**
 * 
 * {
        dateCreated: "24/06/2023",
        newsTitle: "News 1",
        location: "San Salvador",
        description: "Lorem ipsum 1 Lorem ipsum 1 Lorem ipsum 1 Lorem aaaaa ipsum 1 Lorem aaaaa ipsum 1 ipsum 1 Lorem ipsum 1 Lorem aaaaa ipsum 1 Lorem aaaaa ipsum 1ipsum 1 Lorem ipsum 1 Lorem aaaaa ipsum 1 Lorem aaaaa ipsum 1ipsum 1 Lorem ipsum 1 Lorem aaaaa ipsum 1 Lorem aaaaa ipsum 1ipsum 1 Lorem ipsum 1 Lorem aaaaa ipsum 1 Lorem aaaaa ipsum 1",
        viewType: "",
        newsImage:"https://cataas.com/cat",
        newsType: "Recomendaciones",
    },
 */



const NewsCard = ({ dateCreated, newsTitle, location, description, viewType, newsImage, newsType }) => {
    const isArticleView = viewType === 'article';

    const [day, month, year] = dateCreated.split('/');

    const navigate = useNavigate();

    const maxDescriptionLength = isArticleView ? 100 : 90;

    const handleButtonClick = () => {
        const encodedNewsTitle = encodeURIComponent(newsTitle);
        const encodedLocation = encodeURIComponent(location);
        const encodedDescription = encodeURIComponent(description);
        const encodedNewsImage = encodeURIComponent(newsImage);
        const encodedFullDate = encodeURIComponent(dateCreated);
        const encodedNewsType = encodeURIComponent(newsType);

        navigate(`/NewsArticle/${encodedNewsTitle}/${encodedLocation}/${encodedDescription}/${encodedNewsImage}/${encodedFullDate}/${encodedNewsType}`); // Update the URL
    };

    const truncatedDescription = description.length > maxDescriptionLength
        ? `${description.substring(0, maxDescriptionLength)}...`
        : description;

    return (
        <div className={`news-container ${isArticleView ? 'article-view' : 'news-view'}`}>
            <div className='news-card-container'>

                <div className='cont-izquierdo'>
                    
                    <div className={`img-contN ${isArticleView ? 'img-cont-hiddenN' : 'img-cont-visibleN'}`}>
                        <img id="news-img" src={newsImage} alt="news-img" />
                    </div>
                </div>

                <div className='cuadro-informacion'>

                    <div className='titulo-noticia'>
                        <h1>{newsTitle}</h1>
                    </div>

                    <div className="fecha-y-tipo">

                    <div className='cuadro-fecha'>
                        <h1>{`${day}/${month}/${year}`}</h1>
                    </div>

                    <div className="tipo-noticia">
                        <h1>{newsType}</h1>
                    </div>
                    </div>

                    <div className='descripcion'>
                        <p>{truncatedDescription}</p>
                    </div>

                    <button className='mas-info-news' onClick={handleButtonClick}>
                        Leer más
                    </button>

                    <div className='ubicacion'>
                        <img src={locationLogo} alt="location" />
                        <p>{location}</p>
                    </div>

                    

                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

