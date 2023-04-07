const valor1 = 'global'

function minhaFuncao() {
    console.log(valor1)

}

function exec() {
    const valor1 = 'local'
    minhaFuncao()
}

exec()
