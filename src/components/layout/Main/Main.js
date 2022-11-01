import React, { Component } from "react";
import "../Main/Main.css";
import api from "./api.js";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    produtos: [],
  };

  async componentDidMount() {
    const response = await api.get("");

    console.log(response.data);

    this.setState({ produtos: response.data });
  }

  render() {
    const { produtos } = this.state;
    return (
      <section class="container" id="grid-container">
        <h1>Produtos mais vendidos</h1>
        <div class="catalogo">
          {produtos.map((produto) => (
            <li key={produto.nome}>
              <div>
                <Link to="/carrinho" class="card">
                  <img
                    src={produto.imagens[0].linkImagem}
                    useMap="#shape"
                    alt="imagem-produto"
                    width="100%"
                  ></img>
                  <div class="descricao-produto">
                    <h2>{produto.nome}</h2>
                    <h3>R$ {produto.preco},00</h3>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
