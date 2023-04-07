function criandoPessoa (nome) {
    this.nome = nome
    this.nomePessoa = function () {
        console.log('meu nome é', this.nome)
    }
}

const p1 = new criandoPessoa("Liam")
p1.nomePessoa() 
