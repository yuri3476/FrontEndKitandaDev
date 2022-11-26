import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

export default function Produto() {
  const [produto, setProduto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getProduto();
    //   fetch(
    //     `https://ikitandaapi.azurewebsites.net/api/Produto/ObterPorId/${id}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   ).then((response) => response.json().then((data) => setProduto(data)));
    //   console.log(produto);
    // const urlAPI =
    //   "https://ikitandaapi.azurewebsites.net/api/Produto/ObterPorId/269e9ec1-6664-4962-a0f7-0c927309f061";
    // axios
    //   .get(urlAPI)
    //   .then((response) => setProduto(response.data))
    //   .catch((e) => console.log(e));
  }, []);

  async function getProduto() {
    const produtoData = await axios.get(
      `https://ikitandaapi.azurewebsites.net/api/Produto/ObterPorId/${id}`
    );
    setProduto(produtoData.data);
    return console.log(produto);
  }
  return (
    <section className="container" id="grid-container">
      <h1> {id}</h1>

      {/* <div className="catalogo">
        {produto.map((produto) => (
          <li key={produto.nome}>
            <div>
              <div className="card">
                <img
                  src={produto.imagens[0].linkImagem}
                  alt="imagem-produto"
                  width="100%"
                ></img>
                <div className="descricao-produto">
                  <h2>{produto.nome}</h2>
                  <h3>R$ {produto.preco},00</h3>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div> */}
    </section>
  );
}

// import React from "react";
// import { useParams } from "react-router-dom";

// function Produto() {
//   const { id } = useParams();

//   return (
//     <div>
//       <h1>{id}</h1>
//     </div>
//   );
// }

// export default Produto;
