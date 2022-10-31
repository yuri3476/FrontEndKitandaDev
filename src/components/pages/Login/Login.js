import React from "react";
import "../Login/Login.css";

import Navbar from "../../layout/Navbar/Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="container-animation">
        <div class="login">
          <h1>Login</h1>
          <p className="padLogin">
            <input
              className="loginInput"
              type="text"
              placeholder="Nome"
            ></input>
          </p>
          <br></br>
          <input
            className="loginInput"
            type="password"
            placeholder="Senha"
          ></input>
          <br></br>
          <p className="padLogin">
            <button className="loginEnviar">Enviar</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
