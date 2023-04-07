// USANDO CLASSE
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log("my name is", this.nome)
    }
}

const p1 = new Pessoa("Liam")
p1.falar()

// USANDO FACTORY

const criarPessoa = nome => {
    return {
        falar: () => console.log('My name is', nome)
    }
}

const p2 = criarPessoa("Liam")
p2.falar()