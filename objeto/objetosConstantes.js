// pessoa -> 123 -> {...}
const pessoa = { nome: "Liam" }
pessoa.nome = "Noel"
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: "Kurt" }

Object.freeze(pessoa)

pessoa.nome = "Holden"
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: "Leo"})
pessoaConstante.nome = "madmax"
console.log(pessoaConstante)