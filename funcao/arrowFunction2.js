function Pessoa1() {
    this.idade = 0
 // Arrow Function dentro de 'setInterval'      
    setInterval(() => {         
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa1
