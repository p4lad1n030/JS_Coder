const path = require("path");
const fn = require("../projeto_1/funcoes");

const caminho = path.join(__dirname, "..", "dados", "legendas");
const simbolos = [
  ".",
  "?",
  "-",
  ",",
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
  "!",
  ' " ',
  ":",
  "`",
];

fn.composicao(
  fn.lerDiretorio,
  fn.elementosTerminadosCom(".srt"),
  fn.lerArquivos,
  fn.mesclarConteudos,
  fn.separarTextoPor("\n"),
  fn.removerSeVazio,
  fn.removerSeIncluir("-->"),
  fn.removerSeApenasNumeros,
  fn.removerSimbolos(simbolos),
  fn.mesclarConteudos,
  fn.separarTextoPor(" "),
  fn.removerSeVazio,
  fn.removerSeApenasNumeros,
  fn.agruparElementos,
  fn.ordenarPorAtribNumerico("qtde", "desc"),
  console.log
)(caminho)
