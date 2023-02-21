function bomDia() {
  console.log("Bom dia!!!!!!");
}

const boaTarde = function () {
  console.log("Boa tarde!!!!!!");
};

// 1) Passar uma função como param pra outra função
function executarQualquerCoisa(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// 2) Retornar uma função a partir de uma outra função
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
// chamando a  função potencia diretamente sem armazenar em uma const:
console.log(potencia(3)(4));

// =-DESAFIO 1-=
function somar(n1) {
  return function (n2) {
    return function (n3) {
      return n1 + n2 + n3
    };
  };
}

console.log(somar(5)(4)(8));
// -= DESAFIO 2 =-
// RESULTADO GERADO POR MIM
function desafio(n1) {
  return function (n2) {
    return function (fn) {
      if (fn == "-") {
        return n1 - n2;
      } else if (fn == "+") {
        return n1 + n2;
      } else if (fn == "*") {
        return n1 * n2;
      }
    };
  };
}
console.log(desafio(2)(5)("-"));
// ---====  RESPOSTA DO PROFESSOR  ====---
function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}
function subtrair(a, b) {
  return a - b;
}
function multi(a, b) {
  return a * b;
}
console.log(calcular(5) (6) (multi))