import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Adopta from './pages/Adopta/Adopta';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Adopta" element={<Adopta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
