const carrinho = [
  { nome: "Caneta", qtd: 10, preco: 7.99 },
  { nome: "Impressora", qtd: 0, preco: 649.5 },
  { nome: "Caderno", qtd: 4, preco: 27.1 },
  { nome: "Lapis", qtd: 3, preco: 5.82 },
  { nome: "Tesoura", qtd: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;
const qtdMaiorQzero = (item) => item.qtd > 0;
const res = carrinho.filter(qtdMaiorQzero).map(getNome);
console.log(res);

// solução gerada por mim antes do professor fazer
// a minha solução não retorna um array como a do professor e sim itens "soltos"
const maiorQZ = (item) => {
  if (item.qtd > 0) {
    let res = item.nome;
    return console.log(res);
  }
};
carrinho.filter(maiorQZ);



// criando uma solução pra simular o filter com FOR + IF/ELSE
const filtro = val => {
  if (val[i].qtd < 5) {
    console.log(val[i].nome);
  }
}
console.log('kakalaaaaa');
for (var i = 0; i < carrinho.length; i++) {
  filtro(carrinho)
  // if (carrinho[i].qtd < 3) {
  //   console.log(carrinho[i].nome);
  // }
}