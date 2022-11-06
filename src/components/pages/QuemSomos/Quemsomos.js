import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { Link } from "react-router-dom";

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
                alt=""
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
                alt=""
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
                alt=""
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
                src="https://99prod.s3.amazonaws.com/uploads/f1350adc-bdfd-43bf-b210-78d1919cbcf5/Google.png"
                alt=""
              ></img>
            </div>
          </div>
          <div className="bottom">
            <h3>Leonardo</h3>
            <h4>Back</h4>
            <p>frase </p>
            <a href="" target="_blank" className="btn">
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
