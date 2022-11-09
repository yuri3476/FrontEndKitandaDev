import React, {useState} from 'react';
import "../Login/Login.css";

function inicialState(){
  return {user: '', password: ''};
}


const Login = () => {

  const [values,setValues] = useState();

  function onChange(event){
    const {value, name} = event.target;

    setValues({
      ...values,
      [name]:value,
    })
  }

  return (
    <div>
      <div className="container-animation">
        <form>
        <div class="login">
          <h1>Login</h1>
          <p className="padLogin">
            <input
              className="loginInput"
              type="text"
              placeholder="Nome"
              name="user"
              onChange={onChange}
              value={values.user}
            ></input>
          </p>
          <br></br>
          <input
            className="loginInput"
            type="password"
            placeholder="Senha"
            name="password"
            onChange={onChange}
            value={values.password}
          ></input>
          <br></br>
          <p className="padLogin">
            <button className="loginEnviar">Enviar</button>
          </p>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
