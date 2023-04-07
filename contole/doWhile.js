function randomInteger(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let teste 

do {
    teste = randomInteger(-1, 10)
    console.log('x = ', teste)
} while (teste != -1)

console.log('fim')

