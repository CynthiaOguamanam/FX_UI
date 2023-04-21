import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './Components/AboutPage/AboutPage';
import AffiliatePage from './Components/AffiliatePage/AffiliatePage';
import TradingPage from './Components/TradingPage/TradingPage';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Components/LandingPage/Footer/Footer';


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/affiliate" element={<AffiliatePage/>}/>
        <Route path="/trading" element={<TradingPage/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;