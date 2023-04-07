// CRIANDO FUNCTIONS

// criar de forma literal
function fun1 () { }

// uma função pode receber parametros e pode retornar um valor.
//caso o valor de retorno não seja definido, uma função retornara "undefined".

// armazenar em uma variavel
var fun2 = function() { }

// armazenar em um array
var array1 = [function (a, b) {return a + b}, fun1, fun2 ]
console.log (array1[0](3, 4))

// armazenar em um atributo de objeto
let obj1 = {}
obj1.falar = function () { return 'hello'}
console.log(obj1.falar())

// passar função como parametro
function exemplo1(func) {
    func()
}

exemplo1(function () { console.log('exemplo...')})

