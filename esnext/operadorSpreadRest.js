// operador ... rest(juntar) / spread(espalhar)
// usar rest com parametro de função

// usar spread com objeto
const funcionario = { nome: "Liam", salario: 12345.99 };
const clone = { ativo: true, ...funcionario };

console.log(clone)
clone.nome = "Lennon"
console.log(clone)
console.log(funcionario)

// usar spread com array
const grupoA = [ "Gillan", "Paice", "Lord" ];
const grupoB = [ "Blackmore", ...grupoA ];

console.log(grupoB)

