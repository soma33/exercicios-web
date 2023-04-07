require('./global');

console.log(minhaApp.saudacao());
console.log(minhaApp.nome);

minhaApp.nome = "Erro."
console.log(minhaApp.nome);

// tirando o Object.freeze do arquivo 'global'...
// o atributo nome seria reescrito na linha 6...
// e o resultado da linha 7 seria 'Erro'.
