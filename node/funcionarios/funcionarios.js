const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

let chineses = (f) => f.pais === "China"
let mulheres = (f) => f.genero === "F"
let menorSalario = (func, funcAtual) => {
    if(func.salario < funcAtual.salario) {
        return func
    } else {
        return funcAtual
    }
}

axios.get(url).then( response => {
    const funcionarios = response.data

    let func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)
        

})

