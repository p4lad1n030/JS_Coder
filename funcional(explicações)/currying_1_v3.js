function soma(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(soma(1)(2)(3));
// função que valida o nome de um produto
function textoComTamanhoEntre(min) {
  return function (max) {
    return function (err) {
      return function (texto) {
        const tamanho = (texto || "").trim().length;
        if (tamanho < min || tamanho > max) {
          throw err;
        }
      };
    };
  };
}

function aplicarValidacao(fn) {
  return function (valor) {
    try {
      fn(valor);
    } catch (e) {
      return { error: e };
    }
  };
}
// separando os parametros com o retorno de função podemos reutilizar a função pra inumeras chamadas diferentes
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("nome invalido");
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)
const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
const p2 = { nome: "AB", preco: 14.99, desc: 0.25 };

console.log(validarNomeProduto(p1.nome))
console.log(validarNomeProduto(p2.nome))