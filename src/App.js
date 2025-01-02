import React from 'react';
import './App.css';
import Navbar from './Components/Nabar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ContactInfo from './Components/ContactInfo';
import ContactForm from './Components/ContactForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      {/* <Hero />
      <About /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/contact/info" element={<ContactInfo />} />
         <Route path="/contact/form" element={<ContactForm />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;