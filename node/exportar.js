console.log(module.exports)
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports);

exports = {
    nome: "Teste"
}

console.log(module.exports)

module.exports = { publico: "Teste"}

//se precisar atribuir um novo objeto para ser exportado..;
//é obrigatorio usar o 'module.exports'...(linha 18)
//o 'this' e 'exports' vão fuincionar apenas para o objeto de origem. (linha 1)