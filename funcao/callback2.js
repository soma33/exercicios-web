const notas = [1.1, 2.2, 3.3, 4.4, 9.9, 8.8, 10]

// Sem Callback
const notasBaixas1 = []
for(y in notas) {
    if(notas[y] < 6) {
        notasBaixas1.push(notas[y])
    }
}

console.log(notasBaixas1)

// Com Callback
const notasBaixas2 = notas.filter(function(n){
    return n < 6
})

console.log(notasBaixas2)

// Callback com Arrow Function
const notasBaixas3 = notas.filter(y => y <6)
console.log(notasBaixas3)
