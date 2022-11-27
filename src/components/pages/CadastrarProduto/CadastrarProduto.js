import React, { Component } from "react";
import "./Cadastrarproduto.css";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    nome: "",
    categoria: "",
    quantidade: "",
    descricao: "",
    preco: "",
    imagem: {
      nome: "",
      linkImagem: "",
    },
  };

  txtNome_change = (event) => {
    this.setState({ nome: event.target.value });
  };

  txtCategoria_change = (event) => {
    this.setState({ categoria: event.target.value });
  };

  txtQuantidade_change = (event) => {
    this.setState({ quantidade: event.target.value });
  };

  txtDescricao_change = (event) => {
    this.setState({ descricao: event.target.value });
  };

  txtPreco_change = (event) => {
    this.setState({ preco: event.target.value });
  };

  txtImagem_change = (event) => {
    this.setState({ linkImagem: event.target.value });
  };

  salvarNovo = () => {
    const dados = {
      nome: this.state.nome,
      categoria: this.state.categoria,
      quantidade: this.state.quantidade,
      descricao: this.state.descricao,
      preco: this.state.preco,
      imagem: {
        nome: "principal",
        linkImagem: this.state.linkImagem,
      },
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json-patch+json",
      },
      body: JSON.stringify(dados),
    };

    const url = "https://ikitandaapi.azurewebsites.net/api/Produto";

    fetch(url, requestOptions)
      .then(alert("Produto Cadastrado!!"))
      .catch((erro) => alert(erro));
  };

  apagarFormulario = () => {
    document.getElementById("campo").value = "";
  };
  render() {
    return (
      <form id="campo">
        <div class="container-animation">
          <div className="form-product">
            <div className="row mt-5 pt-3">
              <div className="col5">Nome:</div>
              <div className="row mt-2">
                <div className="col9">
                  <input
                    value={this.state.nome}
                    onChange={this.txtNome_change}
                    className="form-control name-pull-image"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="col5">Categoria:</div>
              <div className="row mt-2">
                <div className="row2">
                  <select
                    id="categoria1"
                    class="categoria2"
                    value={this.state.categoria}
                    onChange={this.txtCategoria_change}
                  >
                    <option selected>Selecione</option>
                    <option selected>Celulares</option>
                    <option selected>Eletrônicos</option>
                    <option selected>Games</option>
                    <option selected>Informática</option>
                    <option selected>Livraria</option>
                  </select>
                </div>
              </div>
              <div className="col5">Quantidade:</div>
              <div className="row mt-2">
                <div className="col9">
                  <input
                    value={this.state.quantidade}
                    onChange={this.txtQuantidade_change}
                    className="form-control name-pull-image"
                    type="number"
                  ></input>
                </div>
              </div>
              <div className="col5">Descrição:</div>
              <div className="row mt-2">
                <div className="col9">
                  <input
                    value={this.state.descricao}
                    onChange={this.txtDescricao_change}
                    className="form-control name-pull-image"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="col5">Preço:</div>
              <div className="row mt-2">
                <div className="col9">
                  <input
                    value={this.state.preco}
                    onChange={this.txtPreco_change}
                    className="form-control name-pull-image"
                    type="number"
                  ></input>
                </div>
              </div>
              <div className="col5">Link da Imagem:</div>
              <div className="row mt-2">
                <div className="col9">
                  <input
                    value={this.state.linkImagem}
                    onChange={this.txtImagem_change}
                    className="form-control name-pull-image"
                    type="url"
                    required
                  ></input>
                </div>
              </div>
              <div className="row1">
                {/* Botão de add produto */}
                <div className="col-1">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.salvarNovo()}
                  >
                    Salvar
                  </button>
                </div>
                {/* Botão de voltar para home */}
                <div className="col-1">
                  <Link to="/">
                    <button className="btn btn-primary">Home</button>
                  </Link>
                </div>
                <div className="col-1">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.apagarFormulario()}
                  >
                    Limpar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default App;
