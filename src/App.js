import React from "react";
//RouterDom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import Css
import "./App.css";
//Import Pages
import Home from "../src/components/pages/Home";
import Celulares from "../src/components/pages/Departamento/Celulares";
import Eletronicos from "../src/components/pages/Departamento/Eletronicos";
import Games from "../src/components/pages/Departamento/Games";
import Informatica from "../src/components/pages/Departamento/Informatica";
import Livraria from "../src/components/pages/Departamento/Livraria";
import Contato from "./components/pages/Contato";
import Quemsomos from "./components/pages/QuemSomos/Quemsomos";
import Login from "./components/pages/Login/Login";
import Carrinho from "./components/pages/Carrinho";
import Busca from "./components/pages/Busca";
import Produto from "./components/pages/Produto";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    //Rotas
    <Router>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Busca" element={<Busca />} />
        <Route path="/Produto" element={<Produto />} />

        <Route path="/Celulares" element={<Celulares />} />
        <Route path="/Eletronicos" element={<Eletronicos />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Informatica" element={<Informatica />} />
        <Route path="/Livraria" element={<Livraria />} />

        <Route path="/contato" element={<Contato />} />
        <Route path="/quemsomos" element={<Quemsomos />} />

        <Route path="/login" element={<Login />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
