import React from "react";
import { DiGithubBadge } from "react-icons/di";

import "../QuemSomos/Quemsomos.css";
function Quemsomos() {
  return (
    <div className="titulo">
      <h1>QuemSomos</h1>
      <div className="container-contato">
        <div className="Card">
          <div className="top">
            <div className="img-container">
              <img
                src="https://avatars.githubusercontent.com/u/75454584?v=4"
                alt="imagem-perfil"
              ></img>
            </div>
          </div>
          <div className="bottom">
            <h3>Leleo</h3>
            <h4>Master</h4>
            <p>frase </p>
            <a
              href="https://github.com/Regulus01"
              target="_blank"
              className="btn"
            >
              <DiGithubBadge size={25} className="Github" />
              GitHub
            </a>
          </div>
        </div>
        <div className="Card">
          <div className="top">
            <div className="img-container">
              <img
                src="https://avatars.githubusercontent.com/u/83989931?v=4"
                alt="imagem-perfil"
              ></img>
            </div>
          </div>
          <div className="bottom">
            <h3>Yuri</h3>
            <h4>Front</h4>
            <p>frase </p>
            <a
              href="https://github.com/yuri3476"
              target="_blank"
              className="btn"
            >
              <DiGithubBadge size={25} className="Github" />
              GitHub
            </a>
          </div>
        </div>
        <div className="Card">
          <div className="top">
            <div className="img-container">
              <img
                src="https://avatars.githubusercontent.com/u/70672431?v=4"
                alt=""
              ></img>
            </div>
          </div>
          <div className="bottom">
            <h3>Geovane</h3>
            <h4>Front</h4>
            <p>frase</p>
            <a
              href="https://github.com/KelvenGeovane"
              target="_blank"
              className="btn"
            >
              <DiGithubBadge size={25} className="Github" />
              GitHub
            </a>
          </div>
        </div>
        <div className="Card">
          <div className="top">
            <div className="img-container">
              <img
                src="https://avatars.githubusercontent.com/u/112266976?v=4"
                alt="imagem-perfil"
              ></img>
            </div>
          </div>
          <div className="bottom">
            <h3>Victor</h3>
            <h4>Front</h4>
            <p>frase</p>
            <a
              href="https://github.com/V1ct0rSb"
              target="_blank"
              className="btn"
            >
              <DiGithubBadge size={25} className="Github" />
              GitHub
            </a>
          </div>
        </div>
        <div className="Card">
          <div className="top">
            <div className="img-container">
              <img
                src="https://avatars.githubusercontent.com/u/61235040?v=4"
                alt="imagem-perfil"
              ></img>
            </div>
          </div>
          <div className="bottom">
            <h3>Leonardo</h3>
            <h4>Back</h4>
            <p>frase </p>
            <a
              href="https://github.com/LeoSTeles"
              target="_blank"
              className="btn"
            >
              <DiGithubBadge size={25} className="Github" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quemsomos;
