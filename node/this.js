console.log(this === global)
console.log(this === module)

console.log(this === module)
console.log(this === module.exports)
// this no modulo aponta para module.exports 

function logThis() {
    console.log("Dentro de uma função...")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

}

logThis()

// this dentro de uma função aponta para global,
// ... neste cado temos que ter cuidado.
