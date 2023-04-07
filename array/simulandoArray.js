const quaseArray = {
    0: 'Liam',
    1: 'Kurt',
    2: 'Diana'
}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['Liam', 'Kurt', 'Diana']
console.log(quaseArray.toString(), meuArray)
