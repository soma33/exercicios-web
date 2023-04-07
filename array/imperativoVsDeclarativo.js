const alunos = [
    { nome: "Joana", nota: 7.9 },
    { nome: "Jarvis", nota: 9.2 }
]

// Imperativo

let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota 
}
console.log(total1 / alunos.length)

// Declarativo

const getNota = (n) => n.nota
const soma = (total, atual) => total + atual
let total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
