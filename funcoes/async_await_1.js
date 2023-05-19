// Em suma quando se usa o await na linha de código é como se dicessemos ao código para esperar aquela linha ser executada totalmente para só então prosseguir com a execução do código
function esperarPor (tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function() {
      console.log('Executando promise...');
      resolve()
    }, tempo);
  })
}
async function retornarValorRapido() {
  return 20
}


async function executar() {
  let valor = await retornarValorRapido()

  await esperarPor(1500)
  console.log(`Async/Await ${valor}...`)
  
  await esperarPor(1500)
  console.log(`Async/Await ${valor + 1}...`)
  
  await esperarPor(1500)
  console.log(`Async/Await ${valor + 2}...`)

  return valor + 3
}

async function executarDeVerdade() {
  const valor = await executar()
  console.log(valor)
}

executarDeVerdade()