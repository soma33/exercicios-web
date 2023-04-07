
function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // ' || ' = OU
    const comprarTv50 = trabalho1 && trabalho2 // ' && ' = E
    const comprarTv32 = trabalho1 != trabalho2 
    const ficarSaudavel = !comprarSorvete // '!' negação lógica

    return {comprarSorvete, comprarTv50, comprarTv32, ficarSaudavel}
}

console.log(compras(true, true))
console.log(compras(false, false))
console.log(compras(true, false))
console.log(compras(false, true))
