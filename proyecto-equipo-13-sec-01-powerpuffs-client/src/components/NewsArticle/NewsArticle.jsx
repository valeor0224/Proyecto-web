import React from 'react';
import { useParams } from 'react-router-dom';
import './NewsArticle.css';
import NewsCard from '../cards/NewsCard/NewsCard';
import locationLogo from "../../assets/img/gray-location.png";
import SHARELogo from "../../assets/img/SHARE.png";


const NewsArticle = ({ news }) => {

  const { newsTitle, location, description, newsImage, fullDate, newsType } = useParams();

  const currentIndex = news.findIndex(newsItem => newsItem.newsTitle === newsTitle);

  const latestNews = news
    .filter((_, index) => index !== currentIndex)
    .slice(-3)
    .reverse();

  return (
    <div className='page-section'>
      <div className="event-article-container">

        <div className='titulo-evento2'>
          <h1>{newsTitle}</h1>
        </div>
        <div className='ubicacion2'>
        <div className="image-ubicacion">
             <img src={locationLogo} alt="location-logo" />
          </div>
          <p>{location}</p>
        </div>

        <div className='tipo-evento2'>
          
          <p>{newsType}</p>
        </div>

        <div className='img-visible2'>
          <img src={newsImage} alt="event-img" />
        </div>

        <div className="fecha-compartir">
        <div className='fecha2'>
          <p>fecha: {fullDate}</p>
        </div>

        <div className="share-button-cont">
          <button className="share-button">
            <div className="img-cont2">
            <img src={SHARELogo} alt="share-logo" />
            </div>
            <p>COMPARTIR</p>
          </button>
        </div>

        </div>
        
        <div className='descripcion2'>
          <p>{description}</p>
        </div>

        <div className="assist-button-cont">
          <button className="assist-button">
            ASISTIR AL EVENTO
          </button>
        </div>
        
      </div>

      <div className="side-bar">


        <div className="other-event-cont2">
        <h2>Noticias</h2>
        <span>Otras noticias que podrían interesarte.</span>

        {latestNews.map((newsItem, index) => (
            <NewsCard
              key={index}
              dateCreated={newsItem.dateCreated}
              newsTitle={newsItem.newsTitle}
              location={newsItem.location}
              description={newsItem.description}
              buttonText={newsItem.buttonText}
              viewType="article"
              newsImage={newsItem.newsImage}
              newsType={newsItem.newsType}
            />
          ))}
      
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;