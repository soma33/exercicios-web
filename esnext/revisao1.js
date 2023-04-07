// let e const
{
    var a = 1 // var tem escopo global
    let b = 2 // let tem escopo de bloco
    console.log(b)
}

console.log(a)

// Template String
const produto = "Ipdad"
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {nome: nomeDoCara, idade} = { nome: "Liam", idade: 33 }
console.log(nomeDoCara, idade)
