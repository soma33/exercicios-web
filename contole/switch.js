const imprimirResultado = function(alfa) {
    switch (Math.floor(alfa)) {
        case 1:
        case 2:
            console.log("oasis")
            break
        case 3: case 4:
            console.log("blur")
            break
        case 5: case 6:
            console.log("strokes")
            break
        case 7:
            console.log("nirvana")
            break
        case 8:
        case 9:
        case 10:
            console.log("alice in chains")
            console.log("bob marley")
            console.log("beatles")
            console.log("black sabbath")
            break
        default:
            console.log("fuck you kakaroto", 3333333)
    }

    console.log("fim...")
}

imprimirResultado(1)
imprimirResultado(2)
imprimirResultado(3)
imprimirResultado(4)
imprimirResultado(5)
imprimirResultado(6)
imprimirResultado(7)
imprimirResultado(8)
imprimirResultado(9)
imprimirResultado(23)
imprimirResultado("texto")

