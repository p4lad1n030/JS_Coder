function exec(fn, n1, n2) {
  fn(n1, n2);
}

const somarNoTerminal =  (n1, n2)=> {
   console.log(n1 + n2);
};

const subtrairNoTerminal =  (n1, n2)=> {
   console.log(n1 - n2);
};

exec(somarNoTerminal, 576, 38);
exec(subtrairNoTerminal, 46, 38);
