/*
faca um programa para calcular o valor de uma viagem  .
voce tera 5 variaveis . sendo elas :


1- preco do etanol ;
2- preco a gasolina;
3- o tipo do combustivel do carro ; 
4- gasto media de combustivel do carro por km ;
5- distancia em km ;
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmkm = 100;
const tipoCombustivel = 'Gasolina';
/*posso mudar  o tipoCombustivel = Gasolina */



const litroConsumidos = distanciaEmkm / kmPorLitro;
if (tipoCombustivel === 'Etanol') {
    const valorGasto = litroConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litroConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
