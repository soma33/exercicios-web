const pai = {
    nome: "Liam",
    corCabelo: "Preto"
}

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: "Bia", writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = "Alice"
console.log(filha2.nome + ' Tem Cabelo ' + filha2.corCabelo)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let k in filha2) {
    filha2.hasOwnProperty(k)?
    console.log(k) : console.log('Por Herança: ' + k )
}


// Object.create("objeto protótipo")