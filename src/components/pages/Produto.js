import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import "./Produto.css";

export default function Produto() {
  const [produtos, setProdutos] = useState([]);
  const { nome } = useParams();
  useEffect(() => {
    const urlAPI =
      "https://ikitandaapi.azurewebsites.net/api/Produto/ObterPorId/" + nome;

    axios.get(urlAPI).then((response) => setProdutos(response.data));
  }, []);
  console.log(produtos);
  return (
    <section className="container" id="grid-container">
      <h1>{nome}</h1>
      <div className="catalogo">
        {produtos.map((produto) => (
          <div className="Container">
            <div className="left">
              <img
                src={produto.imagens[0].linkImagem}
                alt="imagem-produto"
                width="100%"
              ></img>
            </div>

            <div className="right">
              <div class="bloco">
                <h5>KitandaDev</h5>
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
                <h3>R$ {produto.preco},00</h3>
                <div className="Quantidade">
                  <h4>Quantidade: </h4> <p>{produto.quantidade} unidades</p>
                </div>
              </div>
              <button>
                <IoCartSharp size={25} />
                <p>Adicionar ao Carrinho</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
