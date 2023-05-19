const path = require("path");
const fn = require("./funcoes");

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

fn.lerDiretorio(caminho)
  // aqui ele filtra somente os arquivos desejados (srt)
  .then(fn.elementosTerminadosCom(".srt"))
  // aqui ele faz a leitura do conteudo dos arquivos
  .then(fn.lerArquivos)
  // função nativa do js responsavel por juntar todos os espaços em branco
  .then(fn.mesclarConteudos)
  // função nativa responsavel por "quebrar as linhas"
  .then(fn.separarTextoPor("\n"))
  // função pra remover os espaços vazios das linhas
  .then(fn.removerSeVazio)
  // função responsavel por remover sequencia de caracteres indesejados
  .then(fn.removerSeIncluir("-->"))
  // função responsavel por remover os numeros
  .then(fn.removerSeApenasNumeros)
  // aqui é removido todos os caracteres de simbolos através do .split e do .join
  .then(fn.removerSimbolos(simbolos))
  // repetição de função
  .then(fn.mesclarConteudos)
  // função responsavel por separar todas as palavras
  .then(fn.separarTextoPor(" "))
  // reuso de função
  .then(fn.removerSeVazio)
  // reuso
  .then(fn.removerSeApenasNumeros)
  // função que contabiliza o uso das palavras
  .then(fn.agruparElementos)
  // função responsavel por organizar em ordem crescente
  .then(fn.ordenarPorAtribNumerico("qtde", "desc"))
  // aqui é impresso o conteudo atraves do clg
  .then(console.log);
