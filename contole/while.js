//a funcão abaixo gera um numero inteiro aleatorio.
function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let op = 0

// diferente => "!=" 
while(op != -1) {
    op = getInteiroAleatorio(-1, 100)
    console.log("a opção escolhida foi ", op)
}

console.log('fim.')


/* 
RESUMO:
A ESTRUTURA "WHILE" É UMA ESTRUTURA DE REPETIÇÃO...
BASEADA NUMA EXPRESSÃO BOOLEANA (VERDADEIRO OU FALSO)...
ENQUANTO FOR 'TRUE' CONTINUA... QUANDO FOR 'FALSE' O LAÇO ACABA...
E ELA (ESTRUTURA WHILE) É PROPRIA PARA EXECUTAR LAÇOS - 
QUE TEM UMA QUANTIDADE INDETERMINADA DE REPETIÇÕES.

*/