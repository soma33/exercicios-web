// uma fatory retorna um novo objeto

module.exports = () => {
    return {
        valor: 0, 
        inc() {
            this.valor++
        }
    }
}
