//FUNCAO SEM RETORNO
{
    function imprimirSoma(a, b) {
        console.log(a + b);
    }

    imprimirSoma(4, 5)
    imprimirSoma(4)
    
    console.log();
}

//FUNÇÃO COM RETORNO
{


    function soma(a, b = 0) {
        return (a + b);
    }

    console.log(soma(2, 3))
    console.log(soma(33))
    
    console.log();
}

//ARMAZENANDO UMA FUNÇÃO DENTRO DE UMA VARIAVEL
{
    const imprimirSoma = function(a, b, c) {
        console.log(a + b + c)
    }

    imprimirSoma(1, 1, 1)

    console.log();
}

//ARMAZENANDO UMA FUNÇÃO ARROW DENTRO DE UMA VARIAVEL
{
    let imprimirSoma = (a, b) => {
        return(a + b)
    }

    console.log(imprimirSoma(2, 2))

    console.log();
}

