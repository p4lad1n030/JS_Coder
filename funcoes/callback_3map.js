// const nums = [1, 2, 3, 4, 5];
// const dobro = (n, i, a) => n * 2 + i + a.length;
// console.log(nums.map(dobro));

/*const nums = [1, 2, 3, 4, 5];
const dobro = (n, i, a) => n * 2 + i + a.length;
console.log(nums.map(dobro));

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)*/

const carrinho = [
  { nome: "Caneta", qtd: 10, preco: 7.99 },
  { nome: "Impressora", qtd: 0, preco: 649.5 },
  { nome: "Caderno", qtd: 4, preco: 27.1 },
  { nome: "Lapis", qtd: 3, preco: 5.82 },
  { nome: "Tesoura", qtd: 1, preco: 19.2 },
];

function identifier(z) {
  console.log(z.nome);
}
function res(p) {
  console.log(p.qtd * p.preco);
}
// carrinho.map(identifier);
// carrinho.map(res);

Array.prototype.meuMap = function (fn) {
  const novoArray = []
  for(let i = 0; i< this.length; i ++){
    novoArray.push(fn(this[i], i, this))

  }
  return novoArray
  }
carrinho.meuMap(identifier)
carrinho.meuMap(res)