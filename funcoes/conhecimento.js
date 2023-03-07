const carrinho = [
  { nome: "Caneta", qtd: 10, preco: 7.99 },
  { nome: "Impressora", qtd: 0, preco: 649.5 },
  { nome: "Caderno", qtd: 4, preco: 27.1 },
  { nome: "Lapis", qtd: 3, preco: 5.82 },
  { nome: "Tesoura", qtd: 1, preco: 19.2 },
];

// Arrow function
(_) => console.log("isto é uma função de seta");

() => {
  return console.log("outra função de seta");
};

// map function
/*gera um NOVO ARRAY com elementos transformados */
const dobro = n1 => n1.qtd * 2
console.log(carrinho.map(dobro))

// filter function
const filtro = arg => arg.preco < 20 && arg.preco > 6
console.log(carrinho.filter(filtro))