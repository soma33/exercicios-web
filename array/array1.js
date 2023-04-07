console.log(typeof Array, typeof new Array, typeof [])

// Criando um 'Array' com 'new'
const aprovados = new Array("Alice", "Mia", "loe")
console.log(aprovados)

// Criando um 'Array' de forma Literal
let aprovados2 = [ 'Alice', 'In', "Chains" ] 
console.log(aprovados2)
console.log(aprovados2[0])
console.log(aprovados2[1])
console.log(aprovados2[2])
console.log(aprovados2[3])

// substituir um elemento apartir do indice
aprovados2[0] = "Dirt"
aprovados2[1] = "Nevermind"
aprovados2[2] = "Facelift"
console.log(aprovados2)

// add um novo elemento usando 'push'
aprovados2.push("Bleach")
console.log(aprovados2)

// 'length' retorna o tamanho do array
console.log(aprovados.length)
console.log(aprovados2.length)

// adicionando em 'aprovados2' um elemento no indice [9]
aprovados2[9] = "InUtero"
console.log(aprovados2.length)
console.log(aprovados2[8] === undefined)
console.log(aprovados2)

// a função 'sort()' aletera e ordena o array de outra forma..
aprovados2.sort()
console.log(aprovados2)
console.log(aprovados2)

// Deletando um indice do array
delete aprovados2[1]
console.log(aprovados2)

// 'splice()' adiciona e remova elemntos no array..
let aprovados3 = ["Nirvana", "Oasis", "Coldplay"]
aprovados3.splice(1, 1, "Elemento1", "elemento2")
console.log(aprovados3)
