import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
