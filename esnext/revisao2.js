// Arrow Funtion
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro Default
function log1 (texto = 'Node') {
    console.log(texto)
}

log1()
log1(1234)
log1("Sou mais forte")

// operador rest/sprad
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3, 4, 5))
