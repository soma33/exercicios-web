class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
   constructor(sobrenome, profissao = "Programador") {
       super(sobrenome)
       this.profissao = profissao
   }
}

class Filho extends Pai {
    constructor() {
        super('Lennon')
    }
}

const filho1 = new Filho
console.log(filho1)

filho1.profissao = 'Bicicleteiro'
console.log(filho1)
