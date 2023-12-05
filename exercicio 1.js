/*faca um programa para calcular o valor de uma viagem calcular


voçê tear 3 variveis . sendo elas :

1 - preço do combustivel ;
2-  gasto medio de combustivel ;
3- distancia em km da viagem ; */


const precoCombustivel = 5.50;
const kmPorLitro = 10 ;
const distanciaEmKm = 4000;

const listroConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = listroConsumidos * precoCombustivel;
console.log(valorGasto);


