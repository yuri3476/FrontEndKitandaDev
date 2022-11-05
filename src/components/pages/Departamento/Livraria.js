import React, { Component } from "react";
import api5 from "./Api/apilivraria";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    produtos: [],
  };

  async componentDidMount() {
    const response = await api5.get("");

    console.log(response.data);

    this.setState({ produtos: response.data });
  }

  render() {
    const { produtos } = this.state;
    return (
      <>
        <section className="container" id="grid-container">
          <h1>Livraria</h1>
          <div className="catalogo">
            {produtos.map((produto) => (
              <li key={produto.nome}>
                <div>
                  <Link to="/Produto" className="card">
                    <img
                      src={produto.imagens[0].linkImagem}
                      useMap="#shape"
                      alt="imagem-produto"
                      width="100%"
                    ></img>
                    <div className="descricao-produto">
                      <h2>{produto.nome}</h2>
                      <h3>R$ {produto.preco},00</h3>
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default App;
