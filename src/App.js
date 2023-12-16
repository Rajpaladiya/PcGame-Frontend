// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './components/Home';
import './index'
import Hero from './components/Hero';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Recent from './components/Recent';
import Live from './components/Live';
import Download from './components/Download';
import DownloadLink from './components/DownloadLink';
import Gameplay from './components/Gameplay';
import GameAbout from './components/GameAbout';
// import Practice from './components/Practice';
// import { Component } from 'react';
import SuccessPage from './SuccessPage';





function App() {
  const location = useLocation();
  console.log("asdasdas", location.pathname);

  return (
    <>

      {
        location.pathname !== '/Success' && <Navbar />
      }

      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/recent' element={<Recent />} />
        <Route path='/live' element={<Live />} />
        <Route path='/download' element={<Download />} />
        <Route path='/downloadlink' element={<DownloadLink />} />
        <Route path='/gameplay' element={<Gameplay />} />
        <Route path='/gameabout' element={<GameAbout />} />
        <Route path='/Success' element={<SuccessPage />} />

      </Routes>

      {
        location.pathname !== '/Success' && <Footer />
      }



    </>
  );
}

export default App;
