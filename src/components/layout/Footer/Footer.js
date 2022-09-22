import React from "react";
import "../Footer/Footer.css";

import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div class="container-footer">
        <div class="row-footer">
          <div class="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li>
                <Link to="/"> Quem somos </Link>
              </li>
              <li>
                <Link to="/"> nossos serviços </Link>
              </li>
              <li>
                <Link to="/"> política de privacidade </Link>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Obter ajuda</h4>
            <ul>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Transporte</Link>
              </li>
              <li>
                <Link to="/">devoluções</Link>
              </li>
              <li>
                <Link to="/">Status De Pedido</Link>
              </li>
              <li>
                <Link to="/">Opções De Pagamento</Link>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Loja online</h4>
            <ul>
              <li>
                <Link to="/">Endereço</Link>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Redes Sociais</h4>

            <div class="medias-socias">
              <Link to="/">
                <FaFacebookF size={25} />
              </Link>
              <Link to="/">
                <FaInstagram size={25} />
              </Link>
              <Link to="/">
                <FaTwitter size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
