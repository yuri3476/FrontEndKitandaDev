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
      <Link to="/" className="logo">
        <h3>VB</h3>
      </Link>

      <div class="dropdownMenu">
        <ul>
          <li>
            <Link to="/" className="sublogo">
              Departamentos
            </Link>
            <div className="sub-menu-01">
              <ul>
                <li className="hover-sub">
                  <Link to="/">Perifericos</Link>
                  <div className="sub-menu-02">
                    <ul>
                      <li>
                        <Link to="/">Teclado</Link>
                      </li>
                      <li>
                        <Link to="/">Mouse</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover-sub">
                  <Link to="/">Hardware</Link>
                  <div className="sub-menu-02">
                    <ul>
                      <li>
                        <Link to="/">Placa de video</Link>
                      </li>
                      <li>
                        <Link to="/">Processador</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="search">
        <input type="text" placeholder="Digite o que deseja procurar..." />
        <button className="buttonSearch">
          <FiSearch size={25} />
        </button>
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
