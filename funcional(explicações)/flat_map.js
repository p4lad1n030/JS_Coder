const letras = ["o", "l", "a", " ", "m", "u", "n", "d", "o"];
const res = letras.map((e) => e.toUpperCase()).reduce((a, b) => a + b);
console.log(res);

const letras2 = [["o", "l", "a"], [" "], ["m", "u", "n", "d", "o"]];
const res2 = letras
  .flat() //função flat que "abre" arrays
  .map((e) => e.toUpperCase())
  .reduce((a, b) => a + b);
console.log(res2);

// neste caso abaixo a mais de um nivel de aninhamento de arrays que pode ser aberto de varias formas
const letras3 = [["o", ["l"], "a"], [" "], ["m", ["u", "n"], "d", "o"]];
// 1° forma
console.log("//1° forma");
console.log(letras3.flat(1));
// 2° forma
console.log("//2° forma");
console.log(letras3.flat(2));
// 3° forma
console.log("//3° forma");
console.log(letras3.flat(3));
// 4° forma
console.log("//4° forma");
console.log(letras3.flat(Infinity));
