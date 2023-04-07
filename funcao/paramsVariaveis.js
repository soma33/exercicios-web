function soma () {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(3, 3, 3))
console.log(soma(2.2, 3.3))
console.log("a", "b", 'c')
