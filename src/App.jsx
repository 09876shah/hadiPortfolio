import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Logs from "./Components/Logs/Logs";
import Craftmenships from "./Components/Craftmenships/Craftmenships";
import Creations from "./Components/Creations/Creations";
import About from "./Components/About/About";
import "./App.css";
import "./Styles/Home/home.css";
import "./Styles/Footer/Footer.css";
import "./Styles/Header/header.css";
import "./Styles/Logs/log.css";
import "./Styles/Craftmanships/craftmenships.css";
import "./Styles/Creations/Creations.css";
import "./Styles/About/About.css";
import "./Styles/Hero.css";
import Contactus from "./Components/ContactUS/Contactus";
import "./Styles/ContactUS/Contactus.css";
import ScrollTop from "./Components/ScrollTop"; // Ensure the correct import

const App = () => {
  return (
    <Router>
      <ScrollTop />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/Craftmenships" element={<Craftmenships />} />
          <Route path="/Creations" element={<Creations />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUS" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
