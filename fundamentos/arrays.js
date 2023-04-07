// ARRAYS
{
    let valores = [9, 43, 22, 33, 18]
    console.log(valores[0], valores[4])

    valores = [3.3, 4.5, 9.1, 5.5]
    console.log(valores)
    
    valores[1] = 999 // muda o valor de determinado indice dentro do array.
    console.log(valores)

    const bandas = ['oasis', "blur", "nirvana", "alice in chains"]
    console.log(bandas)
    console.log(bandas[0], bandas[2])
    console.log(bandas[0], "and", bandas[2])
    
    console.log(bandas.length) // ".length" retorna o total de elementos dentro de um array.
    
    bandas.push(true, 33, "vaca", null)// ".push" add um alemento no array.
    console.log(bandas)

    console.log(bandas.pop())

    delete bandas[0]
    console.log(bandas);

}