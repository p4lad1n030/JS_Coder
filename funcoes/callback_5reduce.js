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
const somar = (acc, el) => {
  console.log(`Este é o acc ${acc}, e este é o elemento ${el}`);
  return acc + el;
};

const totais = carrinho.map(getTotal);

console.log(totais);

const totalGeral = totais.reduce(somar);

console.log(
  `E este é o resultado do reduce ${totalGeral}, este valor é a soma dos elementos dentro do array.`
);
