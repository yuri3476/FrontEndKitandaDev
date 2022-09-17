import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "../src/components/layout/Navbar/Navbar";
import Slider from "../src/components/layout/Slider/Slider";

function App() {
  return (
    <Router>
      <Navbar />
      <Slider />
    </Router>
  );
}

export default App;
