// no codigo abaixo utilizamos callback para gerar uma execução sincrona de codigo com delay oque poderia ser feito de forma muito mais clara sem tantas funções aninhadas com o uso de promisse, como veremos no segundo quadro de função onde passamos a utilizar promisses:
setTimeout(function() {
  console.log('Executando callback...')
  
  setTimeout(function() {
      console.log('Executando callback...')
      
      setTimeout(function() {
          console.log('Executando callback...')
      }, 2000)
  }, 2000)
}, 2000)

// aqui como mencionado anteriormente utilizamos promisses evitando assim o aninhamento de funções tornando o codigo mais legivel
function esperarPor(tempo = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('....executando promisse...'),
      resolve('::::Promisse::::')
    }, tempo);
  })
}
esperarPor(3000).then(console.log)//aqui só chamamos clg por que esta implicito dentro de .then o parametro de resolve 

// function esperarPor(tempo = 2000) {
//   return new Promise(function(resolve) {
//       setTimeout(function() {
//           console.log('Executando promise...')
//           resolve()
//       }, tempo)
//   })
// }

// esperarPor()
//   .then(() => esperarPor()) 
//   .then(esperarPor)