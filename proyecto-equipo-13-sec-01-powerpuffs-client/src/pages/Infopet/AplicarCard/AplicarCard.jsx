import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './AplicarCard.css';


function AplicarCard() {
  //const [someState, setSomeState] = useState(initialValue);

  return (
    <>  
        <div className="aplicar-card">
            <h2>
            ¿Te interesa hacer a nomgato parte de tu familia?
            </h2>    
            <h1>
            ¡Comienza <span>ya</span> el proceso de adopción completando el formulario!                             
            </h1>   
            <button className='Aplicar-adopcion'>
            APLICAR PARA SU ADOPCIÓN 
            </button>
      
        
        </div>
     
    </>
  );
}

export default AplicarCard;
