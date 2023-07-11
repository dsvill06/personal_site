import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home} from "./pages/Home.js";
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="fontLink">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
