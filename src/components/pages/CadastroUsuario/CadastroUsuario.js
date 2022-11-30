import "./CadastroUsuario.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    nomeCliente: "",
    telefone: "",
    cpf: "",
    uf: "",
    cidade: "",
    bairro: "",
    cep: "",
    referencia: "",
    usuario: {
      userName: "",
      password: "",
    },
  };

  txtNome_change = (event) => {
    this.setState({ nomeCliente: event.target.value });
  };

  txtTelefone_change = (event) => {
    this.setState({ telefone: event.target.value });
  };

  txtCpf_change = (event) => {
    this.setState({ cpf: event.target.value });
  };

  txtUf_change = (event) => {
    this.setState({ uf: event.target.value });
  };

  txtCidade_change = (event) => {
    this.setState({ cidade: event.target.value });
  };
  txtBairro_change = (event) => {
    this.setState({ bairro: event.target.value });
  };
  txtCep_change = (event) => {
    this.setState({ cep: event.target.value });
  };
  txtReferencia_change = (event) => {
    this.setState({ referencia: event.target.value });
  };
  txtUsuario_change = (event) => {
    this.setState({ userName: event.target.value });
  };
  txtSenha_change = (event) => {
    this.setState({ password: event.target.value });
  };

  criarDado = () => {
    const dados = {
      nomeCliente: this.state.nomeCliente,
      telefone: this.state.telefone,
      cpf: this.state.cpf,
      uf: this.state.uf,
      cidade: this.state.cidade,
      bairro: this.state.bairro,
      cep: this.state.cep,
      referencia: this.state.referencia,
      usuario: {
        userName: this.state.userName,
        password: this.state.password,
      },
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json-patch+json",
      },
      body: JSON.stringify(dados),
    };

    const url = "https://ikitandaapi.azurewebsites.net/api/Home/CriarUsuario";

    fetch(url, requestOptions)
      .then(alert("Usuario Cadastrado!!"))
      .catch((erro) => alert(erro));
  };

  render() {
    return (
      <div className="container-animation">
        <form className="login2">
          <p className="login-title">Criar conta</p>
          <br></br>

          {/* Nome */}
          <div className="input01">
            <input
              type={"text"}
              className="loginInput"
              placeholder="Nome"
              onChange={this.txtNome_change}
              value={this.state.nomeCliente}
            ></input>
          </div>
          <br></br>

          {/* Telefone */}
          <div className="input01">
            <input
              type={"tel"}
              className="loginInput"
              placeholder="Telefone"
              onChange={this.txtTelefone_change}
              value={this.state.telefone}
            ></input>
          </div>
          <br></br>

          {/* Cpf */}
          <div className="input01">
            <input
              type={"text"}
              className="loginInput"
              placeholder="Cpf"
              onChange={this.txtCpf_change}
              value={this.state.cpf}
            ></input>
          </div>
          <br></br>

          {/* Uf */}
          <div class="input01">
            <select
              className="loginInput"
              type={"text"}
              placeholder="Uf"
              onChange={this.txtUf_change}
              value={this.state.uf}
            >
              <option selected>AC</option>
              <option selected>AL</option>
              <option selected>AP</option>
              <option selected>AM</option>
              <option selected>BA</option>
              <option selected>CE</option>
              <option selected>DF</option>
              <option selected>ES</option>
              <option selected>GO</option>
              <option selected>MA</option>
              <option selected>MT</option>
              <option selected>MS</option>
              <option selected>MG</option>
              <option selected>PA</option>
              <option selected>PB</option>
              <option selected>PR</option>
              <option selected>PE</option>
              <option selected>PI</option>
              <option selected>RJ</option>
              <option selected>RN</option>
              <option selected>RS</option>
              <option selected>RO</option>
              <option selected>RR</option>
              <option selected>SC</option>
              <option selected>SP</option>
              <option selected>SE</option>
              <option selected>TO</option>
            </select>
          </div>
          <br></br>

          {/* Cidade */}
          <div className="input01">
            <input
              type={"text"}
              className="loginInput"
              placeholder="Cidade"
              onChange={this.txtCidade_change}
              value={this.state.cidade}
            ></input>
          </div>
          <br></br>

          {/* Bairro */}
          <div className="input01">
            <input
              type="text"
              className="loginInput"
              placeholder="Bairro"
              value={this.state.bairro}
            ></input>
          </div>
          <br></br>

          {/* CEP */}
          <div className="input01">
            <input
              type={"text"}
              className="loginInput"
              placeholder="Cep"
              onChange={this.txtCep_change}
              value={this.state.cep}
            ></input>
          </div>
          <br></br>

          {/* Referencia */}
          <div className="input01">
            <input
              type={"text"}
              className="loginInput"
              placeholder="Referência"
              onChange={this.txtReferencia_change}
              value={this.state.referencia}
            ></input>
          </div>
          <br></br>

          {/* Nome do usuario */}
          <div className="input01">
            <input
              type={"text"}
              className="loginInput"
              placeholder="Nome do usuário"
              onChange={this.txtUsuario_change}
              value={this.state.userName}
            ></input>
          </div>
          <br></br>

          {/* Senha */}
          <div className="input01">
            <input
              type={"password"}
              className="loginInput"
              placeholder="Senha"
              onChange={this.txtSenha_change}
              value={this.state.password}
            ></input>
          </div>

          {/* Botão */}
          <p class="padLogin">
            <button className="loginEnviar" onClick={() => this.criarDado()}>
              Criar
            </button>
          </p>
          <p className="cadastro">
            Já possui conta? <a href="/login">Acessar</a>
          </p>
        </form>
      </div>
    );
  }
}

export default App;
