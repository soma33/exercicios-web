const Bandas = ['Nirvana', 'AliceInChains', 'Soundgarden', 'StoneTemplePilots']

// "pop" remove o ultimo elemento do array
Bandas.pop()
console.log(Bandas)

// 'push' adiciona um elemento no array
Bandas.push("SystemOfDown")
console.log(Bandas)

// 'shift' remove o primeiro elemento do array
Bandas.shift()
console.log(Bandas)

// 'unshift' adicionda um elemento na primeira posição do array.
Bandas.unshift("Slipknot")
console.log(Bandas)

// 'splice' pode adicionar e remover elementos. 

// adicionar
Bandas.splice(1, 0, "Nirvana", "TheCure")
console.log(Bandas)

// remover
Bandas.splice(1, 4)
console.log()
console.log(Bandas)

// 'slice' cria um novo array, apartir do indice recebido...
const Bandas2 = ['Coldplay', 'Blur', 'Oasis', 'Supergrass']
console.log(Bandas2)
const algumasBandas = Bandas2.slice(1)
console.log(algumasBandas)

const algumasBandas2 = Bandas2.slice(1, 3)
console.log(algumasBandas2)

// Fim...