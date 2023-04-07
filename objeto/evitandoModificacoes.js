// Object.preventExtensions
const demo = Object.preventExtensions({
    nome: "Liam", nome2: "Noel", sobrenome: "Gallgher" 
})
console.log("Extensível:", Object.isExtensible(demo))

console.log()//espaço

demo.nome = "Kurt"
demo.sobrenome2 = "Layne"
delete demo.sobrenome
console.log(demo)  

console.log()//espaço

// Object.seal
const demo2 = {nome: "Paul", nome2: "George"}
Object.seal(demo2)
console.log("Selado:", Object.isSealed(demo2))

console.log()//espaço

demo2.sobrenome = "Lennon"
delete demo2.nome
demo2.nome = "John"
console.log(demo2)

// Object.freeze = selado + valores constantes
