function abelha() {
    this.asas = 0

    setInterval(function(){
        this.asas++
        console.log(this.asas)
    }.bind(this), 1000)
}

new abelha
