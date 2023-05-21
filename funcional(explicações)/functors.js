// Functors são objetos que implementam a função MAP
// que também é um “wrapper” de um valor

// ARRAY é um exemplo de FUNCTORS
const nums = [1, 2, 3, 4, 5, 6];
const novosNums = nums.map((el) => el + 10).map((el) => el * 2);

console.log(nums, novosNums);

// nesta função vemos como chamar o map em um objeto utilizando o functor
function TipoSeguro(valor) {
  return {
    valor,
    map(fn) {
      const valorTransformado = fn(this.valor);
      return TipoSeguro(valorTransformado);
    },
  };
}
const resultado = TipoSeguro("isto é um texto")
  .map((t) => t.toUpperCase())
  .map((t) => `${t}!!!`)
  .map((t) => t.split("").join(" "));
console.log(resultado.valor);

// segunda hipotese retorno de valor nulo pela função
function TipoSeguro(valor) {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined;
    },
    map(fn) {
      if (this.invalido()) {
        return TipoSeguro(null)
      } else {
        const valorTransformado = fn(this.valor);
        return TipoSeguro(valorTransformado);   
      }
    },
  };
}
const resultado2 = TipoSeguro("isto é um texto")
  .map((t) => t.toUpperCase())
  .map((t) => null)
  .map((t) => t.split("").join(" "));
console.log(resultado2.valor);
