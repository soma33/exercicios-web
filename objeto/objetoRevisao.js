// Objeto: coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = "cadeira"
produto["marca do produto"] = "Generica"
produto.preco = 220

console.log(produto)
delete produto.preco // delete é usado para deletar um atributo.
delete produto["marca do produto"]
console.log(produto)

const carro = {
    modelo: "a4",
    valor: 89000,
    proprietario: {
        nome: "liam",
        idade: 33,
        endereco: {
            rua: "Rua ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: "noel",
        idade: 33

    }, {
        nome: "Alice",  
        idade: 33
    }],
    calcularValorSeguro: function(a, b) {
        return a + b
    }
}

carro.proprietario.endereco.numero = 1000
carro["proprietario"] ["endereco"] ["rua"] = "Qwerty"
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
