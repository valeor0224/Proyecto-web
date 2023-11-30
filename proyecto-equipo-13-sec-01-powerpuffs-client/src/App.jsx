import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Adopta from './pages/Adopta/Adopta';
import Event from './pages/Event/Event';
import EventArticle from './components/EventArticle/EventArticle.jsx';
import News from './pages/News/News.jsx';
import NewsArticle from './components/NewsArticle/NewsArticle.jsx';
import Login from './pages/Login/Login.jsx';
import AuthService from './services/AuthService';
import Donation from './pages/Donation/Donation.jsx';
import Infopet from './pages/Infopet/Infopet.jsx';
import AdoptionForm from './pages/AdoptionForm/AdoptionForm.jsx';
import UserList from './pages/UserList/UserList.jsx';


import { events, news } from '../src/components/initial-data.js';
import SmallAddEvent from './pages/Event/SmallAddEvent/SmallAddEvent.jsx';

function App() {

  return (
    <BrowserRouter>
      <Header user={AuthService.getUser()} />
      <Routes>
        <Route path="user-list" element={<UserList />} />
        <Route path="/" element={<Home />} />
        <Route path="Adopta" element={<Adopta />} />
        <Route path="/AdoptionForm/:gatoImage/:nameCat" element={<AdoptionForm />} />
        <Route path="Donation" element={<Donation />} />
        <Route path="Event" element={<Event />} />
        <Route path="/Infopet/:encodedImageCat/:encodedNameCat/:encodedAgeCat/:encodedSexCat/:encodedColorCat" element={<Infopet />} />
        <Route
          path="EventArticle/:eventName/:location/:description/:eventImage/:fullDate/:eventType/:eventHour/:eventBudget/:eventStatus/:eventCreatedBy"
          element={<EventArticle events={events} />}
        />
        <Route path="News" element={<News />} />

        <Route
          path="NewsArticle"
          element={<NewsArticle news={news} />}
        />
        
        <Route path="/SmallAddEvent" element={ <SmallAddEvent />} />



        <Route path="Login" element={<Login user={AuthService.getUser()} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
