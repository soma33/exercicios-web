let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

let obj1 = {}
comparaComThis = comparaComThis.bind(obj1)
comparaComThis(global)
comparaComThis(obj1)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
 
comparaComThisArrow = comparaComThisArrow.bind(obj1)
comparaComThisArrow(obj1)
comparaComThisArrow(module.exports)

/* O this de uma função Arrow é um this associado ao
contexto no qual a função foi definida. */
