const readline = require("readline");

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    try {
      rl.question(pergunta, (resp) => {
        resolve(resp);
        rl.close();
      });
    } catch (e) {
      reject(e);
    }
  });
}

function namorada() {
  setTimeout(() => {
    console.log("N: Apagar as luzes!");
    console.log("N: Pedir Silencio!");
    console.log("N: Surpresa!!!");
  }, 2000);
}

function sindico() {
  setTimeout(() => {
    console.log("S: Monitorando o barulho!");
  }, 1000);
}

async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta("O namorado chegou? (s/N/q) ");
    if (resp.toLowerCase() === "s") {
      (interessados || []).forEach((obs) => obs());
    }else if (resp.toLowerCase()==='q'){
      break
    }
  }
}

porteiro([namorada, sindico]);
