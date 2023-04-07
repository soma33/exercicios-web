// JSON é um formato de dados..
// Não pode ter funções dentro do JSON...

const obj = {a:1, b:2, c:3, soma(){ return a + b + c } }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
// é obrigatório usar aspas duplas para que funcione...
console.log(JSON.parse('{ "a": 1.3, "b": "str1ng", "c": true, "d": {}, "e": [] }'))
