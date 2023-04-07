 function carro (velocidadeMaxima = 100, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo puplico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {velocidadeAtual = velocidadeMaxima}
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }


 }

const alpha1 = new carro()
alpha1.acelerar()
alpha1.acelerar()
console.log(alpha1.getVelocidadeAtual())


const ford1 = new carro(300, 20)
ford1.acelerar()
ford1.acelerar()
ford1.acelerar()
console.log(ford1.getVelocidadeAtual())
