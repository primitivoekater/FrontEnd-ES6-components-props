console.log('==========Sem Otimização==========')
function sum(a, b, c, d, e, f, g, h, i) {
  return a + b + c + d + e + f + g + h + i;
}
console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 0, 5));
console.log('==========Com Otimização==========')
function sum(...args) {
  const soma=args.reduce((acumulador,val)=>acumulador+val)
  return        soma
}
console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 0, 5));
