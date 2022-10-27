import React, { Component } from "react";
import "../Main/Main.css";
import api from './api.js';

class App extends Component{

  state = {
    produtos: [],
  }

  async componentDidMount(){
    const response = await api.get('');

    console.log(response.data);

    this.setState( { produtos: response.data});
    
  }

  render(){

    const { produtos }= this.state;
    return(
      
      <section class="container" id="grid-container">
      <div>
        <h1>Produtos mais vistos</h1>
        {produtos.map(produto => (

    
          <li key={produto.nome}>

      
            <div class="img_produto">
              <h2>{produto.nome}</h2>
              <img src={produto.imagens[0].linkImagem} width="100%" useMap="#shape"></img>
              <h3>R${produto.preco},00</h3>
              <a class="link-grid" href="" target="_blank">COMPRE JÁ</a>
            </div>
            
           


          </li>
        ))}
      </div>
      </section>
    );
  };
};

export default App;
