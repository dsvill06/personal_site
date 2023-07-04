import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"

function App() {
  return (
    <div className="fontLink">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  );
}

export default App;
