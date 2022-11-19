import "./CadastroUsuario.css";
import React from "react";

export default function CadastroUsuario() {
  return (
    <div className="container-animation">
      <form className="login">
        <p className="login-title">Criar conta</p>
        <br></br>

        {/* Nome */}
        <div className="input01">
          <input
            type={"text"}
            className="loginInput"
            placeholder="Nome"
          ></input>
        </div>
        <br></br>

        {/* Email */}
        <div className="input01">
          <input
            type={"email"}
            className="loginInput"
            placeholder="Email"
          ></input>
        </div>
        <br></br>

        {/* Senha */}
        <div className="input01">
          <input
            type={"password"}
            className="loginInput"
            placeholder="Senha"
          ></input>
        </div>

        {/* Botão */}
        <p class="padLogin">
          <button className="loginEnviar">Criar</button>
        </p>
        <p className="cadastro">
          Já possui conta? <a href="/login">Acessar</a>
        </p>
      </form>
    </div>
  );
}
