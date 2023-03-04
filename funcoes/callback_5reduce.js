const carrinho = [
  { nome: "Caneta", qtd: 10, preco: 7.99 },
  { nome: "Impressora", qtd: 0, preco: 649.5 },
  { nome: "Caderno", qtd: 4, preco: 27.1 },
  { nome: "Lapis", qtd: 3, preco: 5.82 },
  { nome: "Tesoura", qtd: 1, preco: 19.2 },
];

// const getTotal = (item) => item.qtd * item.preco;
// const soma = (acc, el) => {
//   acc + el;
// };

// const total = carrinho.map(getTotal).reduce(soma, 0);
// console.log(total)

const only = (val) => val.qtd >= 4;
const getTotal = (item) => item.qtd * item.preco;
const somar = (acc, el) => acc + el;

const totalGeral = carrinho
  //.filter(only)
  .map(getTotal)
  .reduce(somar, 0);
  
  console.log(totalGeral);
  
  
  