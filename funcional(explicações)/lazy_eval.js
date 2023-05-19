// lazY_evaluation nada mais é que atribuir funções a variaveis para melhorar o poder de processamento, usando assim o curryng pra encapsular as funções passando ja seus parametros e chamando as mesmas com o retorno da ultima chamada de função

function eager(t, f) {
  // chamaremos um laço pra simular um processamento mais pesado:
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}
  const valor = Math.pow(t, 3);
  return valor + f;
}
function lazy(t) {
  // chamaremos um laço pra simular um processamento mais pesado:
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}
  const valor = Math.pow(t, 3);
  return function (f) {
    return valor + f;
  };
}
console.time("#1");
console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));
console.timeEnd("#1");

const lazy3 = lazy(3);

console.time("#3");
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd("#3");
