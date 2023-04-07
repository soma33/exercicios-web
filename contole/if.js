//exemplo1: passando uma expressão relacional para IF
function soBoaNoticia(n) {
    if(n >= 7) {
        console.log("aprovado: ", n)
    }
}

soBoaNoticia(9.9)
soBoaNoticia(5.5)
soBoaNoticia(7.7)
console.log();

//exemplo2: passando diretamente um valor para IF
function seForVerdadeEuFalo(v) {
    if(v) {
        console.log("é verdade... ", v)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(2)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("vdd")
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
seForVerdadeEuFalo(!0)
seForVerdadeEuFalo(!null)
seForVerdadeEuFalo(!!null)
