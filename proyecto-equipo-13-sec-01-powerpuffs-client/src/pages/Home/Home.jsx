import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import EscogeMascota from './EscogeMascota/EscogeMascota';
import Mision from './Mision/Mision';
import Ayudar from './Ayudar/Ayudar';
import Adopcion from './Adopcion/Adopcion';
import Eventos from './Eventos/Eventos';

import { events } from '../../components/initial-data.js';
import Dashboard from './Dashboard/Dashboard.jsx';
import { useUserContext } from '../../UserContext.jsx';

function Home() {
  
  const { user2 } = useUserContext();

  if (user2?.roleId === '1' || user2?.roleId === '2') {
    return (
      <div className="Home">
        <HeaderContainer />
        <Dashboard />
      </div>
    );
  }

  return (
    <>  
        <div className="Home">
          <Dashboard />
          <HeaderContainer />
          <EscogeMascota />
          <Mision />
          <Ayudar />
          <Adopcion />
          <Eventos events={events}/>

        </div>
     
    </>
  );
}

export default Home;
