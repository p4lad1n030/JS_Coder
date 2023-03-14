const carrinho = [
  { nome: "Caneta", qtd: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", qtd: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", qtd: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtd: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtd: 1, preco: 19.2, fragil: true },
];

// 1° fragil: true
// 2° pegar só a qtd e preco, pegar tbm o total
// 3° medias totais do exercício anterior

// 1°
const isTrue = (val) => val.fragil === true;
const rellyTrue = carrinho.filter(isTrue);
console.log(rellyTrue);
// 2°
const onlypriceAndAmount = (val) => val.qtd * val.preco;
const res = carrinho.map(onlypriceAndAmount);
console.log(res);
// 3°
const media = (val) => (val.qtd * val.preco) / 2;
const res1 = carrinho.map(media);
console.log(res1);

// media apenas dos produtos frageis
const media1 = carrinho
  .filter((item) => item.fragil)
  .map((item) => item.qtd * item.preco)
  .reduce(
    (acc, el) => {
      const novaQtd = acc.qtde + 1;
      const novoTotal = acc.total + el;
      return { qtde: novaQtd, total: novoTotal, media: novoTotal / novaQtd };
    },
    { qtde: 0, total: 0, media: 0 }
  );
console.log(media1);
// minha solução totalmente errada
// function qq() {
//   const sum = (acc, el) => (acc + el) / 2;
//   const i = rellyTrue.map((val) => val.qtd * val.preco);
//   const j = i.reduce(sum);
//   console.log(j);
// }
