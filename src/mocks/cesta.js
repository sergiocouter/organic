import logoFazenda from "../../assets/assets/assets/logo.png"

import tomate from "../../assets/assets/assets/frutas/Tomate.png";
import brocolis from "../../assets/assets/assets/frutas/Brócolis.png";
import batata from "../../assets/assets/assets/frutas/Batata.png";
import pepino from "../../assets/assets/assets/frutas/Pepino.png";
import abobora from "../../assets/assets/assets/frutas/Abóbora.png";


const cesta= {
    topo: {
        titulo: "Detalhe da Cesta"
    },
    detalhes: {
        nomeDaCesta: "Cesta de verduras",
        imagemFazenda: logoFazenda,
        nomeDaFazenda: "Fazenda Esperança",
        descricao: "Uma cesta com produtos selecionados da fazenda para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
    },
}

export default cesta;