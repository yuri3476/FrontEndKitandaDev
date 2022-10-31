import React, { Component } from "react";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import api1 from "./apicelular.js";
import { IoCartSharp } from "react-icons/io5";

class App extends Component {
  state = {
    produtos: [],
  };

  async componentDidMount() {
    const response = await api1.get("");

    console.log(response.data);

    this.setState({ produtos: response.data });
  }

  render() {
    const { produtos } = this.state;
    return (
      <>
        <div>
          <Navbar />
        </div>
        <section class="container" id="grid-container">
          <h1>Celulares</h1>
          <div class="catalogo">
            {produtos.map((produto) => (
              <li key={produto.nome}>
                <div class="card">
                  <img
                    src={produto.imagens[0].linkImagem}
                    useMap="#shape"
                    alt="imagem-produto"
                    width="100%"
                  ></img>
                  <div class="descriao-produto">
                    <h2 maxlength="5">{produto.nome}</h2>
                    <h3>R$ {produto.preco},00</h3>
                    <a class="link-grid" href="" target="_blank">
                      <p>
                        <IoCartSharp class="icon" size={25} /> COMPRE JÁ
                      </p>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </div>
          <Footer />
        </section>
      </>
    );
  }
}

export default App;
