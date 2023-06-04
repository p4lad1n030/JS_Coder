// function exe() {
//  return console.log('executando promisse')
// }
// function teste() {
//   new Promise((resolve, reject) => {
//     try {
      
//       resolve(exe)
//     } catch (e) {
//       reject(e)
//     }
//   })
  
// }

// teste.then((d)=> console.log(d))


//  o nome chegou de uma requisição externa

const myPromisse = new Promise((resolve, reject) => {
  const nome = 'r'
  if (nome === 'Pedro'){
    resolve('Usuário Pedro encontrado')
  } else {
    reject('Usuário Pedro não encontrado')
  }
})
myPromisse.then((data)=>{
  console.log(data)
}).catch((e)=>{
  console.log(e)
})
