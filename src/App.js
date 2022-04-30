import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "../src/Layout/TopBar"
import Home from "../src/Components/home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "../src/Components/Contact/Contact";
import Footer from "../src/Layout/Footer";



function App() {
  console.log("hello")
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}


export default App;