/*  O resultado do metodo .then() é passado para o próximo .then()
  isso quer dizer que isso quer dizer que o processamanto de um dado no metodo .then sera o paramentro da função do segundo metodo .then de uma mesma promisse
*/
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
/*
aqui esta uma demonstração de um array de nomes pegamos o primeiro nome em seguida pegamos a primeira letra e por fim a convertemos em minúscula
*/