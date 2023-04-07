/* callback = quando determinado evento acontecer...
acione tal função. */

const bandas = ["oasis", "blur", 'supergrass']

function imprimirBandas(nome, indice) {
    console.log(indice + 1,'.', nome)
}

bandas.forEach(imprimirBandas)
bandas.forEach(function(a1) {
    console.log(a1)
})
// 'forEach' é uma função do 'array'. 
// dentro de um array sempre temos a função 'forEach'
// 'a1' representa cada elemento do array "bandas"
// bandas.forEach(x1 => console.log(x1)) - Arrow Function.
