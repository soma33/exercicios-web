let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (indice in number) {
    if(indice == 5) {
        break
    }
    console.log(indice,"=", number[indice])
}

console.log()


for(x in number) {
    if(x == number) {
        continue
    }
    console.log ( x, "=",number[x]) 
}

console.log()

externo: for (a in number) {
    for(b in number){
        if(a == 2 && b == 3) break externo
        console.log("par = ", a, b)
    }
}

console.log('fim...')
