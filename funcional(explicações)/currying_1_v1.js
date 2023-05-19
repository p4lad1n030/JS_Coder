function soma(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(soma(1)(2)(3));
// função que valida o nome de um produto   
function textoComTamanhoEntre(min, max, err, texto) {
  const tamanho = (texto || "").trim().length;
  if (tamanho < min || tamanho > max) {
    throw err;
  }
}

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
textoComTamanhoEntre(4,255,'nome invalido',p1.nome)