// usando 'while'

let contador = 1
while(contador <= 10) {
    console.log("contador = ", contador)
    contador++
} 

// usando 'for'

for(let x = 1; x <= 10; x++) {
    console.log("x = ", x)
}

console.log("fim")

// combinando 'for' com 'array'

const nota = [33, 44, 55, 99, 6.6]
for(let i = 0; i < nota.length; i++) {
    console.log("nota = ", nota[i])
}
