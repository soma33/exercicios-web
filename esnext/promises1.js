function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(2, 'Very Nice!')
    .then(frase => frase.concat('!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(erro => console.log(erro)) // no caso de reject
    
