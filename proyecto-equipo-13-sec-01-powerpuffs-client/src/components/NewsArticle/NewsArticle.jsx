import React from 'react';
import { useLocation } from 'react-router-dom';
import './NewsArticle.css';
import NewsCard from '../cards/NewsCard/NewsCard';
import locationLogo from "../../assets/img/gray-location.png";
import SHARELogo from "../../assets/img/SHARE.png";
import { useUserContext } from '../../UserContext';


const NewsArticle = ({ news }) => {
  const { userRole } = useUserContext();
  console.log(userRole);
 
  const { search } = useLocation();
const params = new URLSearchParams(search);
const newsTitle = params.get('newsTitle');
const location = params.get('location');
const description = params.get('description');
const newsImage = params.get('newsImage');
const dateCreated = params.get('dateCreated');
const newsType = params.get('newsType');
const newsCreatedBy = params.get('newsCreatedBy');

  // Use these parameters to find the corresponding news item
  const currentNews = news.find(newsItem => newsItem.newsTitle === newsTitle);
  const latestNews = news
  .filter(newsItem => newsItem !== currentNews)
  .slice(-3)
  .reverse();

  console.log(newsCreatedBy);


  return (
    <div className='page-section-news'>
      <div className="news-article-container">

        <div className='titulo-evento2'>
          <h1>{newsTitle}</h1>
        </div>
        <div className='ubicacion2'>
        <div className="image-ubicacion">
             <img src={locationLogo} alt="location-logo" />
          </div>
          <p>{location}</p>
        </div>

        <div className='tipo-evento3'>
          <p>{newsType}</p>
        </div>

        {userRole === '1' || userRole === '2' ? (
            <div className="AM-data">
              
              <div className='event-createdby'>
                <h3>Artículo creado por:</h3>
                <p>{newsCreatedBy}</p>
              </div>

            </div>
          ) : null}

        <div className='img-visible3'>
          <img src={newsImage} alt="event-img" />
        </div>

        <div className="fecha-compartir">
        <div className='fecha2'>
          <p>fecha: {dateCreated}</p>
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

        
      </div>

      <div className="side-bar-news">


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