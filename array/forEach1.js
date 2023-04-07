const Bandas = [ 'Oais', 'Blur', 'Nirvana', 'AliceInChains']

Bandas.forEach(function (nome, indice, array){
    console.log(indice + 1, ')', nome )
})

Bandas.forEach(nome => console.log(nome))

Bandas.forEach((nome, indice) => console.log(indice + 1, nome))

let mostrarBandas = function(n, i) {
    console.log(i + 1, n)
}

Bandas.forEach(mostrarBandas)
