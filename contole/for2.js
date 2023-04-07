// USANDO FOR / IN
// For/in é usado para percorrer os elementos/atributos de uma determinada estrutura...
// Podemos usar o For/In em arrays e objetos

const hablas = [2.7, 7.4, 5.5, 9.1, 2.1, 4.3]

for (let i in hablas) {
    console.log(i, hablas[i] )
}

// array => " indice 0 = 2.7 "

const pessoa = {
    nome: "liam",
    sobrenome: "gallagher",
    idade: 33,
    peso: undefined

}

for (let x in pessoa) {
    console.log( x, "=" , pessoa[x])

}

