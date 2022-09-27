import React from "react";
//RouterDom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import Css
import "./App.css";
//Import Pages
import Home from "../src/components/pages/Home";
import Teclado from "./components/pages/Teclado";
import Mouse from "./components/pages/Mouse";
import Headset from "./components/pages/Headset";
import Monitor from "./components/pages/Monitor";
import Cadeira from "./components/pages/Cadeira";
import Contato from "./components/pages/Contato";
import Quemsomos from "./components/pages/Quemsomos";
import Login from "./components/pages/Login/Login";
import Carrinho from "./components/pages/Carrinho";

function App() {
  return (
    //Rotas
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/teclado" element={<Teclado />} />
        <Route path="/mouse" element={<Mouse />} />
        <Route path="/headset" element={<Headset />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/cadeira" element={<Cadeira />} />

        <Route path="/contato" element={<Contato />} />
        <Route path="/quemsomos" element={<Quemsomos />} />

        <Route path="/login" element={<Login />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
}

export default App;
