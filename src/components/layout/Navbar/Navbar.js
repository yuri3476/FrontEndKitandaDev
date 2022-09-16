import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
//React-Icons
import { VscAccount } from "react-icons/vsc";
import { IoCartSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="LogoInicial"src="kitandaDev.jpg" alt="KitandaDev"></img>
      

      <div class="dropdownMenu">
      <nav class="dp-menu">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a>
                <ul>
                    <li><a href="#">Teclado</a></li>
                    <li><a href="#">Mouse</a></li>
                    <li><a href="#">Headset</a></li>
                    <li><a href="#series">Monitor</a></li>
                    <li><a href="#">Cadeira Gamer</a></li>
                </ul>
            </li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Quem somos</a></li>
        </ul>
    </nav>

      </div>

      <div id="divBusca">
      <img src="lupa.png" alt="Buscar..."/>
      <input type="text" id="txtBusca" placeholder="Pesquise seu produto"/>
      <button id="btnBusca">Buscar</button>
    </div>







 

      <ul className="menuNav">
        <li>
          <button className="account">
            <VscAccount size={25} />
          </button>
        </li>
        <li>
          <button className="cart">
            <IoCartSharp size={25} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
