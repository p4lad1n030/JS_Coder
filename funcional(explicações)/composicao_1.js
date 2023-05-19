// aqui podemos observar o que destruction ( 3 pontinhos) tbm gera arrays pois oque é passado pra função composição não é um array de funções e sim varias funções soltas
function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, valor);
  };
}
function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!!`;
}

function tornarLento(texto) {
  return texto.split("").join(" ");
}

const resultado = composicao(gritar, enfatizar, tornarLento)("para");
console.log(resultado);


