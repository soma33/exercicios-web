const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instaciaNova')()
const contadorD = require('./instaciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor, contadorA.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor, contadorC.valor)

