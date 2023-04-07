const pessoa = {
    saudacao: "hello",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()