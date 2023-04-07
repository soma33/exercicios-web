const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = function(obj) {
    return JSON.parse(obj)
}

const somentePreco = function(prod) {
    return prod.preco
}

const resultado = carrinho.map(paraObjeto).map(somentePreco)
console.log(resultado)