    const soma1 = function (x, y) {
    return x + y
}
console.log(soma1(1, 1))

// pode-se passar uma função como parametro.
// abaixo, passei 'soma1' como parametro a 'imprimirResultado':
const imprimirResultado = function (a, b, op = soma1) {
    return console.log(op(a, b))
}

imprimirResultado(2, 2)
imprimirResultado(3, 3, soma1)
imprimirResultado(4, 4, function (x, y) {
    return x - y
})
imprimirResultado(5, 5, (x, y) => x / y) // Arrow function.

let obj1 = {
    hablas: function() {
        return console.log('hablas')
    },

    demo: "demo"
    
}

obj1.hablas()
console.log(obj1.demo)


// EXEMPLO DA AULA:

/*

    let soma3 = function(x, y) {
        return x + y
    }
    
    const imprimirResultado1 = function(a, b, operacao = soma3) {
        console.log(operacao(a, b))
    }
    
    imprimirResultado1(2, 3)
    imprimirResultado1(2, 3, soma3)
    imprimirResultado1(2, 3, function(x, y){
        return x - y
    })
    imprimirResultado1(2, 3, (x, y) => x * y)
    
    let hablas = {
        digas: function () {
            console.log('Hello...')
        }
    }
    
    hablas.digas()




*/