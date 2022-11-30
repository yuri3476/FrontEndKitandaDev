import React, { useEffect, useState } from "react";
import "../Main/Main.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Main() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const urlAPI =
      "https://ikitandaapi.azurewebsites.net/api/Produto/ObterMaisVendidos/";

    axios.get(urlAPI).then((response) => setProdutos(response.data));
  }, []);
  console.log(produtos);
  return (
    <section className="container" id="grid-container">
      <h1>Produtos mais vendidos</h1>
      <div className="catalogo">
        {produtos.map((produto) => (
          <li key={produto.nome}>
            <div>
              <Link to={`/Produto/${produto.produtoId}`} className="card">
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
  );
}
