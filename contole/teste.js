// CONTADOR com WHILE

let contador = 1
while (contador <= 10) {
    console.log('contador = ', contador)
    contador++
}
console.log("fim...")

// CONTADOR com FOR

let textoFinal = "fim"
let contador1
for(x = 1; x <= 10; x++) {
    console.log("x = ", x)
}
console.log(textoFinal)

// GERADOR DE NUMEROS INTEIROS ALEATORIOS com WHILE

function randomNumber(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao 

while(opcao != 0) {
    opcao = randomNumber(0, 10)
    console.log("x = ", opcao)

}
console.log("fim")


// exemplo de IF / ELSE

let exemplo1 = function (nota) {
    if(nota >= 10) {
        console.log("ta bom")
    } 
    else (console.log("ruim"))

}

exemplo1(10)
exemplo1(9)
exemplo1(12)

