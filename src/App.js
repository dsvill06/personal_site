import React from "react";
import { Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home} from "./pages/Home.js";
import Footer from "./components/Footer.js"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="fontLink">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
