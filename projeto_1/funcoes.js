const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho);
      const arquivosCompletos = arquivos.map((arqui) => {
        return path.join(caminho, arqui);
      });
      resolve(arquivosCompletos);
    } catch (e) {
      reject(e);
    }
  });
}
function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, valor);
  };
}
// função responsavel por ler o conteudo de um unico arquivo
function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}

// função responsavel por ler o conteudo de todos os arquivos
function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

// função responsavel por filtrar os arquivos por extenção
function elementosTerminadosCom(padrao) {
  return function (array) {
    return array.filter((el) => el.endsWith(padrao));
  };
}
function removerSeVazio(array) {
  return array.filter((el) => el.trim());
}
function removerSeIncluir(caracteres) {
  return function (array) {
    return array.filter((el) => !el.includes(caracteres));
  };
}
function removerSeApenasNumeros(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((el) => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join("");
      }, el);
      //   let textoSemSimbolos = el;
      //   simbolos.forEach((simbolo) => {
      //     textoSemSimbolos = textoSemSimbolos.split(simbolo).join("");
      //     textoSemSimbolos.toString();
      //   });
      //   return textoSemSimbolos;
    });
  };
}

function mesclarConteudos(conteudo) {
  return conteudo.join(" ");
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo);
  };
}

function agruparElementos(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const el = palavra.toLowerCase();
      const qtde = acc[el] ? acc[el].qtde + 1 : 1;
      acc[el] = { elemento: el, qtde: qtde };
      return acc;
    }, {})
  );
}

function ordenarPorAtribNumerico(attr, ordem = "asc") {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];
    return array.sort(ordem === "asc" ? asc : desc);
  };
}

module.exports = {
  composicao,
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumeros,
  removerSimbolos,
  mesclarConteudos,
  separarTextoPor,
  agruparElementos,
  ordenarPorAtribNumerico,
};
