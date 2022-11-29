import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import "../Login/Login.css";
import axios from './Api/axios';
const LOGIN_URL = '/api/Home/Login';




const Login = () => {
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() =>{
      userRef.current.focus();
  }, [])

  useEffect(()=> {
      setErrMsg('');
  }, [userName, password])

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      try{
        const response = await axios.post(LOGIN_URL, 
          {userName, password});
          
        console.log(JSON.stringify(response.data));
        const token = response?.data.token;
        const role = response?.data.role;
        //const user = response?.data.userName;

        setAuth ({ userName, password, token, role });
        setuserName('');
        setPassword('');
        setSuccess(true);
      } catch (err){

      }

      
  }

  return (

    <>
        {success ? (
        <section>
          <div className="container-animation">
            <h4>Logado {setAuth.user}</h4> 
          </div>
          
        </section>

        ) : (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
      aria-live = "assertive">{errMsg}</p>
      <div className="container-animation">
        <div class="login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
          <p className="padLogin">
            <input
              className="loginInput"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setuserName(e.target.value)}
              value={userName}
              required
              placeholder="Usuario"
            ></input>
          </p>
          <br></br>
          <input
            className="loginInput"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            placeholder="Senha"
          ></input>
          <br></br>
          <p className="padLogin">
            <button className="loginEnviar">Enviar</button>
          </p>
          </form>
        </div>
      </div>
    </section>
    )}
    </>
  );
}

export default Login;
