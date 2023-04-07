Array.prototype.filter2 = function(callback) {
    let newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "Iphone", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true},
    { nome: "Copo de Plástico", preco: 18.99, fragil: false}
] 

let prec = p => (p.preco >= 500)
let frag = f => (f.fragil == true)

console.log(produtos.filter2(prec).filter2(frag))