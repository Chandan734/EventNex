// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Component/Header';
import Poster from './Component/Poster';
import Service from './Component/Service';
import About from './Component/About';
import Gallery from './Component/Gallery';
import Pricing from './Component/Pricing';
import Review from'./Component/Review';
import Contact from './Component/Contact';
import Home from './Component/Home';  

function App() {
  


  return (
    <Router>
    <Header/>
    <Routes>
    <Route index element={<Home />}/>
    <Route path ="/Poster" element={<Poster />}/>
    <Route path ="/Service" element={<Service />}/>
    <Route path ="/About" element={<About />}/>
    <Route path ="/Gallery" element={<Gallery />}/>
    <Route path ="/Pricing" element={<Pricing />}/>
    <Route path ="/Review" element={<Review />}/>
    <Route path ="/Contact" element={<Contact />}/>
    </Routes>
    </Router>

  );
}

export default App;

