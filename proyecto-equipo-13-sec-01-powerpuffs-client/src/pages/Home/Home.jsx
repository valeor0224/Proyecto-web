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

function Home() {
  //const [someState, setSomeState] = useState(initialValue);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="Home">
          <HeaderContainer />
          <EscogeMascota />
          <Mision />
          <Ayudar />
          <Adopcion />
          <Eventos />
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Home;
