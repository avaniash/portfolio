import React from 'react';
import './App.css';
import Navbar from './Components/Nabar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar /> {/* Place Navbar inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;