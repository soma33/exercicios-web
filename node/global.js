//console.log(global)

global.minhaApp = Object.freeze ({
    saudacao() {
        return 'Eu estou em todos os lugares.'
    },
    nome: 'Stardust_App'   
})

// um objeto global pode se reescrever...
// ultilizamos o freeze para "congelar" o objeto...
// para que não seja sobrescrito.