import React from "react";
import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
//React-Icons
import { VscAccount } from "react-icons/vsc";
import { IoCartSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

function Navbar({ search, setSearch }) {
  const navigate = useNavigate();

  function buscar() {
    navigate("/Busca?query=" + search);
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="LogoInicial"
          src="logokitandadev.png"
          alt="KitandaDev"
        ></img>
      </Link>

      <div className="dropdownMenu">
        <nav className="dp-menu">
          <ul>
            <li>
              <Link to="">Departamento</Link>
              <ul>
                <li>
                  <Link to="/Celulares">Celulares</Link>
                </li>
                <li>
                  <Link to="/Eletronicos">Eletrônicos</Link>
                </li>
                <li>
                  <Link to="/Games">Games</Link>
                </li>
                <li>
                  <Link to="/Informatica">Informática</Link>
                </li>
                <li>
                  <Link to="/Livraria">Livraria</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/quemsomos">Quem somos</Link>
            </li>
            <li>
              <Link to="/CadastrarProduto">Cadastrar Produto</Link>
            </li>
          </ul>
        </nav>
      </div>

      <form id="divBusca" onSubmit={buscar}>
        <FiSearch size={25} className="lupa" />
        <input
          type="text"
          name="query"
          id="query"
          placeholder="Pesquise seu produto"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button id="btnBusca">Buscar</button>
      </form>

      <ul className="menuNav">
        <li>
          <button className="account">
            <Link to="/login">
              <VscAccount size={25} className="link" />
            </Link>
          </button>
        </li>
        <li>
          <button className="cart">
            <Link to="/carrinho" className="link">
              <IoCartSharp size={25} />
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
