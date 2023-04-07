Number.prototype.Caso1 = function (alfa, beta) {
    return this >= alfa && this <= beta
}

const imprimirResultadoCaso1 = function (charlie) {
    if (charlie.Caso1(9, 10)) {
        console.log("MANDOU BENZÃO")
    }
    else if (charlie.Caso1(7, 8.99)) {
        console.log("BOM")
    }
    else if (charlie.Caso1(5, 6.99)) {
        console.log("MEDIO")
    }
    else if (charlie.Caso1(3, 4.99)) {
        console.log("RUIM")
    }
    else if (charlie.Caso1(1, 2.99)) {
        console.log("VERME INSOLENTE")
    }
    else {
        console.log("fatality")
    }

}


imprimirResultadoCaso1(10)
imprimirResultadoCaso1(7.70)
imprimirResultadoCaso1(5)
imprimirResultadoCaso1(3)
imprimirResultadoCaso1(2.40)
imprimirResultadoCaso1(0)

