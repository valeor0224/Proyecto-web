import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Adopta from './pages/Adopta/Adopta';
import Event from './pages/Event/Event';
import EventArticle from './components/EventArticle/EventArticle.jsx';
import News from './pages/News/News.jsx';
import NewsArticle from './components/NewsArticle/NewsArticle.jsx';

import { events, news } from '../src/components/initial-data.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Adopta" element={<Adopta />} />
        <Route path="Event" element={<Event />} />
        <Route
          path="EventArticle/:eventName/:location/:description/:eventImage/:fullDate/:eventType/:eventHour"
          element={<EventArticle events={events}/>}
        />
        <Route path="News" element={<News />} />
        <Route
          path="NewsArticle/:newsTitle/:location/:description/:newsImage/:fullDate/:newsType"
          element={<NewsArticle news={news}/>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
