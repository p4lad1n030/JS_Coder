function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
      try {
          con.log('temp')
          if(Math.random() < chanceErro) {
              reject('Ocorreu um erro!')
          } else {
              resolve(valor)
          }
      } catch(e) {
          reject(e)
      }
  })
}

funcionarOuNao('Testando...', 0.5)
  .then(v => `Valor: ${v}`)
  .then(
      v => consol.log(v),
      //abaixo tratamos um erro antes do catch, impedindo assim o catch de agir
      err => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log('Quase Fim!'))
  .catch(err => console.log(`Erro Geral: ${err}`))
  .then(() => console.log('Fim!'))