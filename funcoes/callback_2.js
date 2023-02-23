const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");
function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString());
}
console.log('Inicio...')
// fs.readFile(caminho, {}, exibirConteudo);
fs.readFile(caminho, exibirConteudo);
// fs.readFile(caminho, _, exibirConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log('fim...')

//abaixo obrigando o código a seguir o fluxo de forma sincrona
console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')
