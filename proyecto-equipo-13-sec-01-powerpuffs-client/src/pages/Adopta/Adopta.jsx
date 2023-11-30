import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Desplegable from './Desplegable/Desplegable';
import CatCard from '../../components/cards/CatCard/CatCard';
import CatCardContainer from './CatCardContainer/CatCardContainer';
import { catsData } from '../../components/initial-data';
import ImageSlider from "../../components/cards/ImageSlider/ImageSlider";
import './Adopta.css';

function Adopta() {
  //const [someState, setSomeState] = useState(initialValue);

  return (
    <>  
        <div className="cat-page">
        <CatCardContainer cats={catsData} />

        <div className='slider-container'>
        <div className='text-above-slider'>
          <h1>Peluditos adoptados</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ad ut id, amet consectetur non labore nulla incidunt molestiae veniam excepturi, quam repellendus odio vero minima adipisci odit nobis exercitationem.</p>
        </div>
        <ImageSlider />  
        </div>       
      
        
        </div>
     
    </>
  );
}

export default Adopta;
