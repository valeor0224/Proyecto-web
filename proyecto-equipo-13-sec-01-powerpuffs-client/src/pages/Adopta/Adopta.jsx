import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Desplegable from './Desplegable/Desplegable';

function Adopta() {
  //const [someState, setSomeState] = useState(initialValue);

  return (
    <>  
        <div className="Home">
          <Desplegable/>
        </div>
     
    </>
  );
}

export default Adopta;
