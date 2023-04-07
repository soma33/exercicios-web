const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "Iphone", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true},
    { nome: "Copo de Plástico", preco: 18.99, fragil: false}
] 

console.log(produtos.filter(function(i) {
    return false
}))

/*
console.log(produtos.filter(function(p) {
    return p.preco >= 1000 && p.fragil == true
}))
*/

let prec = p => (p.preco >= 500)
let frag = f => (f.fragil == true)
console.log(produtos.filter(prec).filter(frag))

