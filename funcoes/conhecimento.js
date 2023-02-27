// Arrow function
(_) => console.log("isto é uma função de seta");

() => {
  return console.log("outra função de seta");
};

// map function
/*gera um NOVO ARRAY com elementos transformados */
const n = [1,2,3,4,5]
const dobro = n1 => n1 * 2
console.log(n.map(dobro))

// filter function